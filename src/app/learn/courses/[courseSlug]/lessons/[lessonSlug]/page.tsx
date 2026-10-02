import Link from 'next/link';
import styles from './page.module.css';

interface Props {
  params: {
    courseSlug: string;
    lessonSlug: string;
  };
}

export default function LessonPlayer({ params }: Props) {
  // In a real app, fetch lesson data from database based on slugs
  
  return (
    <div className={styles.lessonLayout}>
      <div className={styles.mainPlayer}>
        <div className={styles.header}>
          <Link href={`/learn`} className={styles.backLink}>
            ← Back to Dashboard
          </Link>
          <h1 className={styles.lessonTitle}>Module 1: Introduction to Bibliology</h1>
        </div>

        {/* Video Player Placeholder */}
        <div className={styles.videoContainer}>
          <div className={styles.videoPlaceholder}>
            <span className={styles.playIcon}>▶</span>
            <span>Video Content (Protected)</span>
          </div>
        </div>

        {/* Lesson Controls & Content */}
        <div className={styles.lessonControls}>
          <button className="button button-secondary">← Previous Lesson</button>
          <button className="button button-primary">Mark as Complete & Continue →</button>
        </div>

        <div className={styles.lessonContent}>
          <h2>Lesson Notes</h2>
          <p>
            The study of Bibliology involves understanding how the Bible was written, 
            transmitted, and canonized. In this lesson, we explore the divine inspiration 
            of Scripture and what it means for the Bible to be our ultimate authority.
          </p>
          <h3>Key Scripture References</h3>
          <ul>
            <li><strong>2 Timothy 3:16-17:</strong> All Scripture is breathed out by God...</li>
            <li><strong>2 Peter 1:20-21:</strong> No prophecy of Scripture comes from someone's own interpretation...</li>
          </ul>
        </div>
      </div>

      <aside className={styles.lessonSidebar}>
        <h3>Course Modules</h3>
        <ul className={styles.moduleList}>
          <li className={styles.moduleItemActive}>
            <div className={styles.moduleIcon}>✓</div>
            <span>1. Introduction to Bibliology</span>
          </li>
          <li className={styles.moduleItem}>
            <div className={styles.moduleIconCircle}></div>
            <span>2. The Nature of Inspiration</span>
          </li>
          <li className={styles.moduleItem}>
            <div className={styles.moduleIconCircle}></div>
            <span>3. Canonization</span>
          </li>
        </ul>

        <div className={styles.resources}>
          <h3>Downloads</h3>
          <button className={styles.resourceLink}>📄 Lesson Handout (PDF)</button>
          <button className={styles.resourceLink}>📝 Reflection Questions</button>
        </div>
      </aside>
    </div>
  );
}
