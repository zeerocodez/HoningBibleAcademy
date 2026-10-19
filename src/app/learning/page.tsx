import PageHero from '@/components/PageHero';
import styles from './page.module.css';
import Link from 'next/link';

export default function Learning() {
  return (
    <>
      <PageHero title="HBA Virtual Classroom & Learning" imageSrc="/lucas-law-ecELcxmJTk4-unsplash.jpg" />
      <main className={styles.main}>
        <div className="container" style={{ marginTop: '2rem' }}>

        <div style={{
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '12px',
          padding: '1.25rem 1.75rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h3 style={{ margin: '0 0 0.25rem 0', color: '#1e3a8a', fontSize: '1.15rem' }}>
              🎓 Active Student Learning Portal (LMS)
            </h3>
            <p style={{ margin: 0, color: '#3b82f6', fontSize: '0.92rem' }}>
              Access your enrolled courses, syllabus, lessons, and personal learning journal.
            </p>
          </div>
          <Link href="/learn" className="button button-primary" style={{ whiteSpace: 'nowrap', padding: '0.65rem 1.25rem', fontSize: '0.92rem' }}>
            Go to My Dashboard & Courses →
          </Link>
        </div>
        
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
            <Link href="/learning/library?category=ebooks" className={styles.feature} style={{textDecoration: 'none', color: 'inherit'}}>📚 E-books</Link>
            <Link href="/learning/library?category=commentaries" className={styles.feature} style={{textDecoration: 'none', color: 'inherit'}}>📖 Commentaries</Link>
            <Link href="/learning/library?category=bible_study" className={styles.feature} style={{textDecoration: 'none', color: 'inherit'}}>📖 Bible study materials</Link>
            <Link href="/learning/library?category=research_papers" className={styles.feature} style={{textDecoration: 'none', color: 'inherit'}}>📝 Research papers</Link>
            <Link href="/learning/library?category=audio_lectures" className={styles.feature} style={{textDecoration: 'none', color: 'inherit'}}>🎧 Audio lectures</Link>
            <Link href="/learning/library?category=video_lectures" className={styles.feature} style={{textDecoration: 'none', color: 'inherit'}}>🎥 Video lectures</Link>
            <Link href="/learning/library?category=academic_articles" className={styles.feature} style={{textDecoration: 'none', color: 'inherit'}}>📄 Academic articles</Link>
            <Link href="/learning/library?category=exegetical" className={styles.feature} style={{textDecoration: 'none', color: 'inherit'}}>🔍 Exegetical resources</Link>
            <Link href="/learning/library?category=templates" className={styles.feature} style={{textDecoration: 'none', color: 'inherit'}}>🗂️ Research templates</Link>
            <Link href="/learning/library?category=sermons" className={styles.feature} style={{textDecoration: 'none', color: 'inherit'}}>📑 Sermon resources</Link>
            <Link href="/learning/library?category=lecture_notes" className={styles.feature} style={{textDecoration: 'none', color: 'inherit'}}>📘 Lecture notes</Link>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
