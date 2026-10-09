'use client';

import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>HONING BIBLE ACADEMY</h2>
          <p className={styles.motto}>
            Equipping for Sound Biblical Insight, Effective Ministry, Leadership, and Scholarship.
          </p>
        </div>
      </div>
    </footer>
  );
}
