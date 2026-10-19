import PageHero from '@/components/PageHero';
import styles from './page.module.css';

export default function About() {
  return (
    <>
      <PageHero title="About Honing Bible Academy" imageSrc="/kojo-kwarteng-KUzlAah2dog-unsplash.jpg" />
      <main className={styles.main}>
        <div className="container" style={{ marginTop: '2rem' }}>
        
        <section className={styles.section}>
          <h2>About Honing Bible Academy</h2>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderLeft: '4px solid var(--color-primary, #1e3a8a)',
            color: '#1e293b',
            padding: '0.75rem 1.25rem',
            borderRadius: '6px',
            fontSize: '0.98rem',
            fontWeight: 600,
            marginBottom: '1.75rem',
            lineHeight: '1.5'
          }}>
            <span>🏛️</span>
            <span>Licensed and accredited by the Nigeria Council for Theological Studies and Christian Education (NICTSCE).</span>
          </div>
          <p>
            Honing Bible Academy (HBA) is a biblical training institution committed to equipping believers, ministers, biblical scholars, and Christian leaders with sound biblical insight, effective ministry skills, leadership development, and scholarly competence for impactful Christian service.
          </p>
          <p>
            The Academy is dedicated to promoting excellence in biblical education, ministerial preparation, Christian leadership, and scholarly engagement. Through structured programmes and relevant learning experiences, HBA empowers individuals to deepen their understanding of Scripture, strengthen their ministry capabilities, develop effective leadership skills, and respond to the contemporary challenges of the Church and society.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Vision Statement</h2>
          <p>We see a generation of believers being honed through sound biblical teaching, spiritual maturity, and godly character for effective Christian service and global impact.</p>
        </section>

        <section className={styles.section}>
          <h2>Mission Statement</h2>
          <p>Our mission is to provide sound biblical education and practical ministerial training, honing leaders who are spiritually mature, morally upright, and equipped for transformational impact in the Church and society.</p>
        </section>

        <section className={styles.section}>
          <h2>Objectives of HONING BIBLE ACADEMY (HOBA)</h2>
          <ol className={styles.list}>
            <li>To provide sound and balanced biblical education.</li>
            <li>Raise spiritually mature, and intellectually equipped Christian leaders for global impact.</li>
            <li>To equip students with practical ministerial skills for service.</li>
            <li>To promote relevant biblical research and publication that contribute to the advancement of Christian doctrines, and scholarship.</li>
            <li>Address contemporary issues from a biblically informed perspective.</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>Leadership Structure</h2>
          <ul className={styles.list}>
            <li><strong>Founder/President</strong> - Dr. Clifford Sunday Stephen</li>
            <li><strong>Co-founder/Vice President</strong> - Mrs. Ubokko Clifford Stephen</li>
            <li><strong>Board Chairman</strong> - Prof. Mbosowo Bassey Udok</li>
            <li><strong>Board Member</strong> - Dr. Usenobong Akpan</li>
            <li><strong>Publicity Secretary</strong> - Pastor Mfoniso James</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>From the Founder/President</h2>
          <p>Welcome to Honing Bible Academy, where biblical truth, scholarly inquiry and effective ministry converge...</p>
        </section>

        <section className={styles.section}>
          <h2>About the Founder/President</h2>
          <div className={styles.founderGrid}>
            <div className={styles.founderImageWrapper}>
              <img src="/founder.jpg" alt="Dr. Clifford Sunday Stephen" className={styles.founderImage} />
            </div>
            <div className={styles.founderText}>
              <p>
                Dr. Clifford Stephen is a bibliologist, ethnographer and a pragmatic teacher of God’s Word. He earned a Bachelor’s Degree in Religious and Cultural Studies from University of Uyo. Motivated by a continuing commitment to biblical scholarship, he obtained a Master’s Degree in Biblical Studies from University of Calabar. He further advanced his academic formation by earning a Doctor of Philosophy (PhD) in Biblical Studies from University of Port Harcourt and later completed a Doctor of Divinity (D.Div.) from International Bible Academy USA.
              </p>
              <p>
                In addition to his theological education, Dr. Stephen has further strengthened his professional and ministerial competence through certifications in Biblical Languages, Christian Counseling, Cognitive Behavioural Therapy (CBT), Project Implementation, Human Resource Management, etc.
              </p>
              <p>
                Dr. Stephen is devoted to advancing sound biblical teaching, equipping leaders, and promoting the faithful interpretation and practical application of God’s Word for the transformation of lives and ministries.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
