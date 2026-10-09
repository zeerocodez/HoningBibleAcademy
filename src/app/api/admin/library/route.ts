import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    
    const title = formData.get('title') as string | null;
    const author = formData.get('author') as string;
    const category = formData.get('category') as string;
    const files = formData.getAll('files') as File[];

    if (!category || !files || files.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const uploadDir = join(process.cwd(), 'public', 'uploads');
    
    // Ensure upload directory exists
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
      // Ignore if directory exists
    }

    const createdResources = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create a unique filename
      const uniqueFilename = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
      const filePath = join(uploadDir, uniqueFilename);
      
      await writeFile(filePath, buffer);
      
      const fileUrl = `/uploads/${uniqueFilename}`;
      
      let resourceTitle = file.name.replace(/\.[^/.]+$/, ""); // strip extension
      if (title) {
        resourceTitle = files.length > 1 ? `${title} - ${file.name}` : title;
      }

      const resource = await prisma.libraryResource.create({
        data: {
          title: resourceTitle,
          author,
          category,
          fileUrl,
          fileType: file.type || 'application/octet-stream',
        }
      });
      
      createdResources.push(resource);
    }

    return NextResponse.json({ success: true, resources: createdResources });
  } catch (error: any) {
    console.error('UPLOAD_ERROR:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const resources = await prisma.libraryResource.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(resources);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch resources' }, { status: 500 });
  }
}
