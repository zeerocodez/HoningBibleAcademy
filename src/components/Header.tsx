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
          <Link href="/" className={styles.link}>HOME</Link>
          <Link href="/about" className={styles.link}>ABOUT HBA</Link>
          <Link href="/programmes" className={styles.link}>PROGRAMMES</Link>
          <Link href="/admissions" className={styles.link}>ADMISSIONS</Link>
          <Link href="/learning" className={styles.link}>LEARNING</Link>
          <Link href="/faculty" className={styles.link}>FACULTY</Link>
          <Link href="/research" className={styles.link}>RESEARCH</Link>
          <Link href="/resources" className={styles.link}>RESOURCES</Link>
          <Link href="/events" className={styles.link}>EVENTS</Link>
          <Link href="/contact" className={styles.link}>CONTACT</Link>
          <Link href="/login" className={styles.button}>STUDENT PORTAL</Link>
        </nav>
      </div>
    </header>
  );
}
