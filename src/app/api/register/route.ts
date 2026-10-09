import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { sendWelcomeEmail, sendAdminNotification } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, courseId } = body;

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

    const adminEmails = ['zeerocodes@gmail.com', 'stevencliff34@gmail.com'];
    const isSuperAdmin = adminEmails.includes(email.toLowerCase());

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: isSuperAdmin ? 'ADMIN' : 'STUDENT'
      }
    });

    // Create an enrollment record for the user if they are a student
    if (!isSuperAdmin) {
      const selectedCourseId = courseId || 'certificate-in-biblical-studies';
      await prisma.enrollment.create({
        data: {
          userId: user.id,
          courseId: selectedCourseId,
          status: 'PENDING'
        }
      });

      // Send transactional emails
      // Note: In production, these should ideally be processed in a background queue
      // so they don't block the API response if the email server is slow.
      sendWelcomeEmail(email, name).catch(console.error);
      sendAdminNotification(name, email, selectedCourseId).catch(console.error);
    }

    return NextResponse.json(user);
  } catch (error: any) {
    console.log('REGISTRATION_ERROR', error);
    return new NextResponse(error instanceof Error ? error.message : String(error), { status: 500 });
  }
}
