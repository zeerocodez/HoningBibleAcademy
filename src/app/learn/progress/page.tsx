import styles from './page.module.css';
import { courses } from '@/lib/courses';
import Link from 'next/link';

export default function ProgressPage() {
  const enrolledCourse = courses[0]; // Mocking enrolled course

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Learning Progress</h1>
      
      <div className={styles.overviewCards}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>1</span>
          <span className={styles.statLabel}>Active Courses</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>0</span>
          <span className={styles.statLabel}>Completed Courses</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>0</span>
          <span className={styles.statLabel}>Certificates Earned</span>
        </div>
      </div>

      <div className={styles.courseProgress}>
        <h2>{enrolledCourse.title}</h2>
        <div className={styles.progressContainer}>
          <div className={styles.progressHeader}>
            <span>Overall Progress</span>
            <span className={styles.percentage}>20%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '20%' }}></div>
          </div>
        </div>

        <div className={styles.moduleBreakdown}>
          <h3>Module Breakdown</h3>
          <ul className={styles.moduleList}>
            <li className={styles.moduleCompleted}>
              <div className={styles.icon}>✓</div>
              <span>Module 1: Bibliology</span>
            </li>
            <li className={styles.moduleInProgress}>
              <div className={styles.iconCircle}></div>
              <span>Module 2: Interpreting Scripture (Current)</span>
            </li>
            <li className={styles.moduleLocked}>
              <div className={styles.iconLocked}>🔒</div>
              <span>Module 3: Creation to the Kingdom</span>
            </li>
          </ul>
        </div>

        <div className={styles.actions}>
          <Link href={`/learn/courses/${enrolledCourse.slug}`} className="button button-primary">
            Continue Learning
          </Link>
        </div>
      </div>
    </div>
  );
}
