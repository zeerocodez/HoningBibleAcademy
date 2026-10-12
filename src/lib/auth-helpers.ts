export const DEFAULT_ADMIN_EMAILS = [
  'zeerocodes@gmail.com',
  'stevencliff34@gmail.com',
  'solutionsbox1@gmail.com',
  'admin@honingbibleacademy.org.ng',
];

export function getAdminEmails(): string[] {
  const envAdmins = process.env.ADMIN_EMAILS
    ? process.env.ADMIN_EMAILS.split(',').map(e => e.trim().toLowerCase())
    : [];
  return Array.from(new Set([...DEFAULT_ADMIN_EMAILS.map(e => e.toLowerCase()), ...envAdmins]));
}

export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  const adminEmails = getAdminEmails();
  return adminEmails.includes(email.trim().toLowerCase());
}
