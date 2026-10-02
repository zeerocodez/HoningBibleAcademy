import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logoContainer}>
          <img src="/logo.jpeg" alt="Honing Bible Academy Logo" className={styles.logoImage} />
        </Link>
        <nav className={styles.nav}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/courses" className={styles.link}>Courses</Link>
          <Link href="/faq" className={styles.link}>FAQ</Link>
          <Link href="/login" className={styles.link}>Log in</Link>
          <Link href="/enroll" className={styles.button}>Enroll</Link>
        </nav>
      </div>
    </header>
  );
}
