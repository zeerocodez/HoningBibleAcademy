import { courses } from '@/lib/courses';
import Link from 'next/link';
import styles from './page.module.css';

export default function StudentDashboard() {
  // In a real app, this would filter by the student's enrolled courses.
  const enrolledCourses = courses;

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.pageTitle}>Student Dashboard</h1>
      
      <section className={styles.section}>
        <h2>Virtual Classroom Interface</h2>
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
        <h2>Continue Learning</h2>
        <div className={styles.courseGrid}>
          {enrolledCourses.map(course => (
            <div key={course.slug} className={styles.courseCard}>
              <div className={styles.cardHeader}>
                <h3>{course.title}</h3>
                <span className={styles.progress}>20% Complete</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: '20%' }}></div>
              </div>
              <div className={styles.cardFooter}>
                <p>Next up: <strong>Module 3 - Creation to the Kingdom</strong></p>
                <Link href={`/learn/courses/${course.slug}`} className="button button-primary">
                  Resume Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <div className={styles.twoColumn}>
        <section className={styles.section}>
          <h2>Recent Journal Entries</h2>
          <div className={styles.emptyState}>
            <p>You haven't added any journal entries yet.</p>
            <Link href="/learn/journal" className="button button-secondary">Start a Journal Entry</Link>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Upcoming Live Sessions</h2>
          <div className={styles.emptyState}>
            <p>No upcoming live sessions scheduled.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
