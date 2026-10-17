'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Footer.module.css';
import { APPLICATION_FORM_URL } from '@/lib/constants';

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
          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.95rem' }}>
            <Link href="/admissions" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>Admissions</Link>
            <a href={APPLICATION_FORM_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '600' }}>Online Application ↗</a>
            <Link href="/programmes" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>Programmes</Link>
            <Link href="/contact" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
