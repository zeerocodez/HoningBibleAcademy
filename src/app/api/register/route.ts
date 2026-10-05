import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new NextResponse('Missing info', { status: 400 });
    }

    const userExists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (userExists) {
      return new NextResponse('User already exists', { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const isSuperAdmin = email.toLowerCase() === 'zeerocodes@gmail.com';

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: isSuperAdmin ? 'ADMIN' : 'STUDENT'
      }
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log('REGISTRATION_ERROR', error);
    return new NextResponse(error instanceof Error ? error.message : String(error), { status: 500 });
  }
}
