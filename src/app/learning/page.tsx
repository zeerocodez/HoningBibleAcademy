import PageHero from '@/components/PageHero';
import styles from './page.module.css';

export default function Learning() {
  return (
    <>
      <PageHero title="HBA Virtual Classroom & Learning" imageSrc="/lucas-law-ecELcxmJTk4-unsplash.jpg" />
      <main className={styles.main}>
        <div className="container" style={{ marginTop: '2rem' }}>
        
        <section className={styles.section}>
          <h2>The Virtual Classroom Interface</h2>
          <p className={styles.description}>Everything you need from one intuitive dashboard.</p>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>🎥 Live class</div>
            <div className={styles.feature}>🎧 Audio</div>
            <div className={styles.feature}>📄 Notes</div>
            <div className={styles.feature}>📚 Reading materials</div>
            <div className={styles.feature}>💬 Discussion forum</div>
            <div className={styles.feature}>📝 Assignment</div>
            <div className={styles.feature}>📊 Quiz</div>
            <div className={styles.feature}>🎓 Examination</div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>HBA Digital Library</h2>
          <p className={styles.description}>Resources available to our students:</p>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>📚 E-books</div>
            <div className={styles.feature}>📖 Bible study materials</div>
            <div className={styles.feature}>📝 Research papers</div>
            <div className={styles.feature}>🎧 Audio lectures</div>
            <div className={styles.feature}>🎥 Video lectures</div>
            <div className={styles.feature}>📄 Academic articles</div>
            <div className={styles.feature}>🔍 Exegetical resources</div>
            <div className={styles.feature}>🗂️ Research templates</div>
            <div className={styles.feature}>📑 Sermon resources</div>
            <div className={styles.feature}>📘 Lecture notes</div>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
