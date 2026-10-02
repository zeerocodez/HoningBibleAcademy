import Header from '@/components/Header';
import { courses } from '@/lib/courses';
import Link from 'next/link';
import styles from './page.module.css';

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="container section">
        <h1 className="text-center">Course Catalog</h1>
        <p className={`text-center ${styles.subtitle}`}>
          Explore our structured learning programs designed to deepen your understanding of Scripture.
        </p>

        <div className={styles.courseGrid}>
          {courses.map(course => (
            <div key={course.slug} className={styles.courseCard}>
              <div className={styles.cardImage}>
                <img src={course.image} alt={course.title} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h2>{course.title}</h2>
                  <span className={styles.price}>{course.price}</span>
                </div>
                <p className={styles.description}>{course.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.duration}>{course.duration}</span>
                  <Link href={`/courses/${course.slug}`} className="button button-primary">
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
