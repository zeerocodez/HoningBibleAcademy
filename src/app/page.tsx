import Header from '@/components/Header';
import styles from './page.module.css';
import Link from 'next/link';
import { courses } from '@/lib/courses';

export default function Home() {
  const mainCourse = courses[0]; // The Biblical Narrative

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>World-Class Theological Education</span>
              <h1 className={styles.title}>Grow in confidence. <br/>Go deeper in Scripture.</h1>
              <p className={styles.subtitle}>
                Discover the unified story of the Bible. Honing Bible Academy provides clear, structured teaching to help you interpret Scripture thoughtfully and apply it faithfully to your everyday life.
              </p>
              <div className={styles.heroActions}>
                <Link href="/enroll" className={`button button-primary ${styles.ctaPrimary}`}>
                  Start Learning Today
                </Link>
                <a href="#curriculum" className={`button button-secondary ${styles.ctaSecondary}`}>
                  Explore 17 Programmes
                </a>
              </div>
              <div className={styles.trustSignals}>
                <div className={styles.avatars}>
                  <div className={styles.avatar}></div>
                  <div className={styles.avatar}></div>
                  <div className={styles.avatar}></div>
                </div>
                <span className={styles.trustText}>Accredited by NICTSCE. Join hundreds of students.</span>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <div className={styles.videoPlaceholder}>
                <div className={styles.playButton}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span>Watch the Introduction</span>
              </div>
              {/* Decorative elements */}
              <div className={styles.decorativeShape1}></div>
              <div className={styles.decorativeShape2}></div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={`section ${styles.benefits}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>A Better Way to Study the Bible</h2>
              <p className={styles.sectionSubtitle}>
                Move past fragmented reading. Our comprehensive approach gives you the tools to understand the historical context, theological depth, and practical application of God's Word.
              </p>
            </div>
            
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>📚</div>
                <h3>Clear, Structured Teaching</h3>
                <p>Follow a carefully designed path that builds your knowledge step-by-step, taking you from foundational concepts to advanced theological understanding.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>✍️</div>
                <h3>Guided Reflection</h3>
                <p>Knowledge must move to the heart. Use our integrated learning journal to process what you learn and prayerfully apply it to your life.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🎓</div>
                <h3>Measurable Progress</h3>
                <p>Track your growth through structured knowledge checks, module milestones, and optional certificates of completion to stay motivated.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Curriculum Overview */}
        <section id="curriculum" className={`section ${styles.curriculum}`}>
          <div className="container">
            <div className={styles.curriculumLayout}>
              <div className={styles.curriculumText}>
                <span className={styles.eyebrow}>Our Programmes</span>
                <h2 className={styles.sectionTitle}>17 Specialized Certificates</h2>
                <p className={styles.curriculumDesc}>
                  From Biblical Languages to Cybertheology and Strategic Leadership, our accredited certificate programs are designed to equip you for every facet of modern ministry and personal spiritual growth.
                </p>
                <div className={styles.curriculumStats}>
                  <div className={styles.stat}>
                    <strong>17</strong>
                    <span>Programmes</span>
                  </div>
                  <div className={styles.stat}>
                    <strong>Fully</strong>
                    <span>Accredited</span>
                  </div>
                  <div className={styles.stat}>
                    <strong>Online</strong>
                    <span>Learning</span>
                  </div>
                </div>
                <Link href="/courses" className={`button button-secondary ${styles.viewCourseBtn}`}>
                  View All Certificates
                </Link>
              </div>
              
              <div className={styles.moduleGrid}>
                {courses.slice(0, 6).map((course, i) => (
                  <div key={course.slug} className={styles.moduleMiniCard}>
                    <span className={styles.modNum}>0{i + 1}</span>
                    <h4 className={styles.modTitle}>{course.title.replace(/^[0-9.]+\s*/, '')}</h4>
                  </div>
                ))}
                <div className={styles.moduleMiniCardMore}>
                  <span>+ 11 more certificates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Options / Pricing */}
        <section className={`section ${styles.pricing}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Start Your Journey</h2>
              <p className={styles.sectionSubtitle}>Enroll today and get immediate access to all course materials, the private learning journal, and community resources.</p>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingContent}>
                <h3>{mainCourse.title}</h3>
                <p>Complete Access</p>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{mainCourse.price}</span>
                  <span className={styles.priceDetail}>One-time payment</span>
                </div>
                <ul className={styles.featureList}>
                  <li>✓ 12 Comprehensive Video Modules</li>
                  <li>✓ Private Digital Learning Journal</li>
                  <li>✓ Downloadable Study Guides & Notes</li>
                  <li>✓ Self-Paced (No deadlines)</li>
                  <li>✓ 14-Day Money-Back Guarantee</li>
                </ul>
              </div>
              <div className={styles.pricingAction}>
                <Link href="/enroll" className="button button-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem' }}>
                  Enroll Now
                </Link>
                <p className={styles.guaranteeText}>Guaranteed secure checkout.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
