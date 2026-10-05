import Link from 'next/link';
import styles from './layout.module.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            Admin User
          </div>
        </header>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
