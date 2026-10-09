const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    where: { role: 'STUDENT' }
  });

  for (const user of users) {
    await prisma.enrollment.upsert({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: 'certificate-in-biblical-studies'
        }
      },
      update: {},
      create: {
        userId: user.id,
        courseId: 'certificate-in-biblical-studies',
        status: 'PENDING'
      }
    });
  }

  console.log(`Created enrollments for ${users.length} students.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
