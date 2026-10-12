'use client';

import Link from 'next/link';
import styles from './layout.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { isAdminEmail } from '@/lib/auth-helpers';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isAdmin = session?.user?.role === 'ADMIN' || isAdminEmail(session?.user?.email);

  useEffect(() => {
    if (status === 'unauthenticated' || (status === 'authenticated' && !isAdmin)) {
      router.push('/login');
    }
  }, [status, isAdmin, router]);

  if (status === 'loading') {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Loading admin portal...</p>
      </div>
    );
  }

  if (!session || !isAdmin) {
    return null;
  }

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          HBA Admin
        </div>
        <nav className={styles.nav}>
          <Link href="/admin" className={styles.link}>Dashboard</Link>
          <Link href="/admin/students" className={styles.link}>Manage Students</Link>
          <Link href="/admin/courses" className={styles.link}>Manage Courses</Link>
          <Link href="/admin/admissions" className={styles.link}>Admissions</Link>
          <Link href="/admin/elibrary" className={styles.link}>e-Library</Link>
          <Link href="/admin/settings" className={styles.link}>Settings</Link>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.topbar}>
          <div className={styles.userMenu}>
            {session.user?.name || session.user?.email || 'Admin User'}
          </div>
        </header>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}

