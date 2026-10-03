'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logoContainer} onClick={() => setIsMenuOpen(false)}>
          <img src="/logo.jpeg" alt="Honing Bible Academy Logo" className={styles.logoImage} />
        </Link>
        
        {/* Mobile Menu Button */}
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuOpen : ''}`}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
          <Link href="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link href="/about" className={styles.link} onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          <Link href="/programmes" className={styles.link} onClick={() => setIsMenuOpen(false)}>PROGRAMMES</Link>
          <Link href="/admissions" className={styles.link} onClick={() => setIsMenuOpen(false)}>ADMISSIONS</Link>
          <Link href="/learning" className={styles.link} onClick={() => setIsMenuOpen(false)}>LEARNING</Link>
          <Link href="/faculty" className={styles.link} onClick={() => setIsMenuOpen(false)}>FACULTY</Link>
          <Link href="/events" className={styles.link} onClick={() => setIsMenuOpen(false)}>EVENTS</Link>
          <Link href="/contact" className={styles.link} onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          <Link href="/login" className={styles.button} onClick={() => setIsMenuOpen(false)}>STUDENT PORTAL</Link>
        </nav>
      </div>
    </header>
  );
}
