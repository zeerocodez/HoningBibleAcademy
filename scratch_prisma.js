const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const user = await prisma.user.findMany();
    console.log(user);
  } catch (e) {
    console.error("Prisma error:", e);
  }
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
