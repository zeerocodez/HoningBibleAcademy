import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

import { isAdminEmail } from "@/lib/auth-helpers";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user?.password) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        if (isAdminEmail(user.email) && user.role !== 'ADMIN') {
          await prisma.user.update({
            where: { id: user.id },
            data: { role: 'ADMIN' }
          }).catch(console.error);
          user.role = 'ADMIN';
        }

        return user;
      }
    })
  ],
  events: {
    async createUser({ user }) {
      if (isAdminEmail(user.email)) {
        await prisma.user.update({
          where: { id: user.id },
          data: { role: 'ADMIN' }
        }).catch(console.error);
      }
    }
  },
  pages: {
    signIn: '/login',
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id;
      }
      
      if (token.email && isAdminEmail(token.email)) {
        token.role = 'ADMIN';
        await prisma.user.updateMany({
          where: { email: token.email, role: { not: 'ADMIN' } },
          data: { role: 'ADMIN' }
        }).catch(console.error);
      } else if (!user && token.email) {
        const dbUser = await prisma.user.findUnique({ where: { email: token.email }});
        if (dbUser) {
          token.role = dbUser.role;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role || (isAdminEmail(session.user.email) ? 'ADMIN' : 'STUDENT');
        (session.user as any).id = token.id;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET || "verysecret_fallback_key_for_dev",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
