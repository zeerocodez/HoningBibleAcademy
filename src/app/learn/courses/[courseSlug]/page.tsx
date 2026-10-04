import Link from 'next/link';
import { getCourseBySlug } from '@/lib/courses';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

interface Props {
  params: Promise<{
    courseSlug: string;
  }>;
}

export default async function CourseOverview({ params }: Props) {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);

  if (!course) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/learn" className={styles.backLink}>← Back to Dashboard</Link>
        <h1>{course.title}</h1>
        <p className={styles.description}>Welcome to the course! Below is your syllabus and current progress.</p>
        
        <div className={styles.progressSection}>
          <div className={styles.progressHeader}>
            <span>Your Progress</span>
            <span className={styles.progressPercentage}>0% Complete</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '0%' }}></div>
          </div>
        </div>
      </div>

      <div className={styles.modules}>
        <h2>Course Modules</h2>
        <div className={styles.moduleList}>
          {course.modules.map((mod, index) => (
            <div key={mod.id} className={styles.moduleCard}>
              <div className={styles.moduleInfo}>
                <span className={styles.moduleNumber}>Module {index + 1}</span>
                <h3>{mod.title}</h3>
                <p>{mod.description}</p>
              </div>
              <div className={styles.moduleAction}>
                <Link 
                  href={`/learn/courses/${course.slug}/lessons/lesson-${mod.id}`}
                  className="button button-primary"
                >
                  {index === 0 ? 'Start Module' : 'Locked'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
