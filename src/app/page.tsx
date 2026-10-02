import Header from '@/components/Header';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Grow in confidence. Go deeper in Scripture.</h1>
              <p className={styles.subtitle}>
                Honing Bible Academy helps learners understand the Bible’s story, interpret Scripture thoughtfully, and apply what they learn in their everyday faith.
              </p>
              <div className={styles.heroActions}>
                <Link href="/courses" className="button button-primary">Explore the courses</Link>
                <button className="button button-secondary">Watch the introduction</button>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.videoPlaceholder}>
                <span className={styles.playIcon}>▶</span>
                <span>Video coming soon</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={`section ${styles.benefits}`}>
          <div className="container">
            <h2 className="text-center">Why study with us?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.card}>
                <h3>Clear, structured teaching</h3>
                <p>Follow a proven path to understand the Bible systematically and confidently.</p>
              </div>
              <div className={styles.card}>
                <h3>Reflection through a learning journal</h3>
                <p>Process what you learn and apply it to your life through guided reflection.</p>
              </div>
              <div className={styles.card}>
                <h3>Progress through lessons</h3>
                <p>Track your growth with structured knowledge checks and clear milestones.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
