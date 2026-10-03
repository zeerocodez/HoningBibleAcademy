import Header from '@/components/Header';
import styles from './page.module.css';
import Link from 'next/link';
import { courses } from '@/lib/courses';
import AnimatedSection from '@/components/AnimatedSection';
import ImageSlider from '@/components/ImageSlider';
import Testimonials from '@/components/Testimonials';


export default function Home() {
  const mainCourse = courses[0]; // The Biblical Narrative

  return (
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>World-Class Theological Education</span>
              <h1 className={styles.title}>Grow in confidence. <br/>Go deeper in Scripture.</h1>
              <p className={styles.subtitle}>
                Honing Bible Academy equips for Sound Biblical Insight, Effective Ministry, Leadership and Scholarship.
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
              <div className={styles.videoContainer}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/6KuPjo1diLg" 
                  title="Honing Bible Academy Introduction" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className={styles.iframe}
                ></iframe>
              </div>
              {/* Decorative elements */}
              <div className={styles.decorativeShape1}></div>
              <div className={styles.decorativeShape2}></div>
            </div>
          </div>
        </section>

        <section style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatedSection delay={200}>
            <ImageSlider />
          </AnimatedSection>
        </section>

        {/* Benefits Section */}
        <AnimatedSection className={`section ${styles.benefits}`}>
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
        </AnimatedSection>

        {/* The Curriculum Overview */}
        <AnimatedSection id="curriculum" className={`section ${styles.curriculum}`}>
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
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection className={`section ${styles.about}`}>
          <div className="container">
            <div className={styles.aboutGrid}>
              <div className={styles.aboutText}>
                <div className={styles.sectionHeader} style={{ margin: '0 0 2rem 0', textAlign: 'left' }}>
                  <h2 className={styles.sectionTitle}>About Honing Bible Academy</h2>
                  <p className={styles.sectionSubtitle}>
                    Honing Bible Academy (HBA) is a Christian educational and biblical training institution committed to equipping believers, ministers, scholars, and Christian leaders with sound biblical insight, effective ministry skills, leadership development and scholarly competence.
                  </p>
                </div>
                <Link href="/about" className="button button-primary">Read Our Story</Link>
              </div>
              <div className={styles.aboutImageWrapper}>
                <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=1200" alt="Bible Study" className={styles.aboutImage} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Visual Journey */}
        <AnimatedSection className={`section ${styles.journey}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Your Journey With Us</h2>
            </div>
            <div className={styles.journeyFlow}>
              <div className={styles.journeyStep}>1. DISCOVER</div>
              <div className={styles.journeyArrow}>↓</div>
              <div className={styles.journeyStep}>2. APPLY</div>
              <div className={styles.journeyArrow}>↓</div>
              <div className={styles.journeyStep}>3. ADMISSION</div>
              <div className={styles.journeyArrow}>↓</div>
              <div className={styles.journeyStep}>4. LEARN</div>
              <div className={styles.journeyArrow}>↓</div>
              <div className={styles.journeyStep}>5. ASSIGNMENTS</div>
              <div className={styles.journeyArrow}>↓</div>
              <div className={styles.journeyStep}>6. EXAMINATION</div>
              <div className={styles.journeyArrow}>↓</div>
              <div className={styles.journeyStep}>7. ASSESSMENT</div>
              <div className={styles.journeyArrow}>↓</div>
              <div className={styles.journeyStep}>8. CERTIFICATION</div>
              <div className={styles.journeyArrow}>↓</div>
              <div className={styles.journeyStep}>9. HBA ALUMNI</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Scholarship without borders */}
        <AnimatedSection className={`section ${styles.borders}`}>
          <div className="container">
            <div className={styles.bordersContent}>
              <h2 className={styles.bordersTitle}>Scholarship Without Borders</h2>
              <p className={styles.bordersSubtitle}>Biblical education without geographical boundaries.</p>
              <div className={styles.countries}>
                <span>🇳🇬 Nigeria</span>
                <span>🇬🇭 Ghana</span>
                <span>🇿🇦 South Africa</span>
                <span>🇬🇧 United Kingdom</span>
                <span>🇺🇸 United States</span>
                <span>🇨🇦 Canada</span>
                <span>and other countries.</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>

        {/* Why Trust HBA */}
        <AnimatedSection className={`section ${styles.trust}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Why Students Trust HBA</h2>
            </div>
            <div className={styles.trustGrid}>
              <div className={styles.trustItem}>Qualified Faculty</div>
              <div className={styles.trustItem}>Structured Programmes</div>
              <div className={styles.trustItem}>Flexible Learning</div>
              <div className={styles.trustItem}>Biblical Scholarship</div>
              <div className={styles.trustItem}>Practical Ministry Training</div>
              <div className={styles.trustItem}>Leadership Development</div>
              <div className={styles.trustItem}>Student Support</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Course Options / Pricing */}
        <AnimatedSection className={`section ${styles.pricing}`}>
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
        </AnimatedSection>
      </main>
  );
}
