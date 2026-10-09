'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function approveAdmission(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== 'ADMIN') throw new Error('Unauthorized');

  const enrollmentId = formData.get('id') as string;
  
  if (!enrollmentId) return;

  await prisma.enrollment.update({
    where: { id: enrollmentId },
    data: { status: 'ACTIVE' }
  });

  revalidatePath('/admin/admissions');
}

export async function saveSettings(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== 'ADMIN') throw new Error('Unauthorized');

  // In a real app, save to DB. For now just revalidate
  revalidatePath('/admin/settings');
}
