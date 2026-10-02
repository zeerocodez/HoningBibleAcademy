import Link from 'next/link';
import styles from './layout.module.css';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.lmsLayout}>
      {/* LMS Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            Honing LMS
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/learn" className={styles.navLink}>Dashboard</Link>
          <Link href="/learn/courses" className={styles.navLink}>My Courses</Link>
          <Link href="/learn/journal" className={styles.navLink}>Learning Journal</Link>
          <Link href="/learn/progress" className={styles.navLink}>Progress</Link>
        </nav>
        <div className={styles.sidebarFooter}>
          <Link href="/account" className={styles.navLink}>Account</Link>
          <button className={styles.signOutButton}>Sign Out</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        <header className={styles.topbar}>
          <div className={styles.topbarLeft}>
             {/* Mobile menu toggle would go here */}
          </div>
          <div className={styles.topbarRight}>
            <span className={styles.welcome}>Welcome back, Student</span>
            <Link href="/" className={styles.returnLink}>Return to Public Site</Link>
          </div>
        </header>
        <main className={styles.contentArea}>
          {children}
        </main>
      </div>
    </div>
  );
}
