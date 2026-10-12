import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';

function resolveDatabaseUrl(): string | undefined {
  if (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('file:')) {
    const prismaDb = path.join(process.cwd(), 'prisma', 'dev.db');
    const rootDb = path.join(process.cwd(), 'dev.db');
    if (fs.existsSync(prismaDb)) {
      return `file:${prismaDb}`;
    }
    if (fs.existsSync(rootDb)) {
      return `file:${rootDb}`;
    }
  }
  return process.env.DATABASE_URL;
}

const dbUrl = resolveDatabaseUrl();
if (dbUrl) {
  process.env.DATABASE_URL = dbUrl;
}

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['error'],
    ...(dbUrl ? { datasources: { db: { url: dbUrl } } } : {}),
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
