import Header from '@/components/Header';
import { getCourseBySlug } from '@/lib/courses';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseDetail({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container section">
        <div className={styles.header}>
          <Link href="/courses" className={styles.backLink}>← Back to courses</Link>
          <h1 className={styles.title}>{course.title}</h1>
          <p className={styles.description}>{course.description}</p>
          
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Format</span>
              <span className={styles.metaValue}>{course.duration}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Price</span>
              <span className={styles.metaValue}>{course.price}</span>
            </div>
          </div>
          
          <div className={styles.actions}>
            <Link href="/enroll" className="button button-primary">Enroll Now</Link>
            <Link href="/contact" className="button button-secondary">Have questions?</Link>
          </div>
        </div>

        <div className={styles.curriculum}>
          <h2>Course Curriculum</h2>
          <div className={styles.moduleList}>
            {course.modules.map((mod, index) => (
              <div key={mod.id} className={styles.moduleCard}>
                <div className={styles.moduleNumber}>Module {index + 1}</div>
                <div className={styles.moduleContent}>
                  <h3>{mod.title}</h3>
                  <p>{mod.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
