import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { APPLICATION_FORM_URL } from '@/lib/constants';

export default function Programmes() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.pageTitle}>Our Programmes</h1>

        <section className={styles.section}>
          <h2>Certificate Programmes</h2>
          <ul className={styles.courseList}>
            <li>1. Certificate in Biblical Studies</li>
            <li>2. Certificate in Biblical Languages (Greek & Hebrew)</li>
            <li>3. Certificate in Industrial Theology</li>
            <li>4. Certificate in Cybertheology</li>
            <li>5. Certificate in Ecumenical Theology</li>
            <li>6. Certificate in Philosophical Theology</li>
            <li>7. Certificate in Biblical Hermeneutics</li>
            <li>8. Certificate in Digital Hermeneutics</li>
            <li>9. Certificate in Homiletics</li>
            <li>10. Certificate in Missiology</li>
            <li>11. Certificate in Christian Apologetics</li>
            <li>12. Certificate in Family and Marriage Ministry</li>
            <li>13. Certificate in Pastoral Counselling</li>
            <li>14. Certificate in Strategic Leadership</li>
            <li>15. Certificate in Church Planting</li>
            <li>16. Certificate in Church Administration</li>
            <li>17. Certificate in Trauma-Informed Support</li>
            <li>18. Certificate in Chaplaincy</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>DIPLOMA IN CHRISTIAN MINISTRY AND LEADERSHIP</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Code</th>
                <th>Course Title</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>DIP 101</td><td>Spiritual Formation</td></tr>
              <tr><td>DIP 102</td><td>Bible Survey</td></tr>
              <tr><td>DIP 103</td><td>Biblical Hermeneutics</td></tr>
              <tr><td>DIP 104</td><td>Life and Teachings of Jesus Christ</td></tr>
              <tr><td>DIP 105</td><td>Faith and Holiness</td></tr>
              <tr><td>DIP 106</td><td>Global Mission</td></tr>
              <tr><td>DIP 107</td><td>Christian Ethics</td></tr>
              <tr><td>DIP 108</td><td>Emotional Intelligence</td></tr>
              <tr><td>DIP 109</td><td>Spiritual Intelligence</td></tr>
              <tr><td>DIP 110</td><td>Effective Bible Study</td></tr>
              <tr><td>DIP 111</td><td>Homiletics</td></tr>
              <tr><td>DIP 112</td><td>Effective Prayer</td></tr>
              <tr><td>DIP 113</td><td>Church History I</td></tr>
              <tr><td>DIP 114</td><td>Leadership Skills I</td></tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>ADVANCED DIPLOMA IN CHRISTIAN MINISTRY AND LEADERSHIP</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Code</th>
                <th>Course Title</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ADIP 101</td><td>Systematic Theology</td></tr>
              <tr><td>ADIP 102</td><td>Pauline and Johannine Theology</td></tr>
              <tr><td>ADIP 103</td><td>Apocalyptic Literature</td></tr>
              <tr><td>ADIP 104</td><td>Christian Doctrine</td></tr>
              <tr><td>ADIP 105</td><td>Contextual Hermeneutics</td></tr>
              <tr><td>ADIP 106</td><td>Christian Apologetics</td></tr>
              <tr><td>ADIP 107</td><td>Church History II</td></tr>
              <tr><td>ADIP 108</td><td>The Anatomy of the Five-Fold Ministry</td></tr>
              <tr><td>ADIP 109</td><td>History and Religion of Israel</td></tr>
              <tr><td>ADIP 110</td><td>Transformational Leadership</td></tr>
              <tr><td>ADIP 111</td><td>Pastoral Care and Counselling</td></tr>
              <tr><td>ADIP 112</td><td>Mentoring and Discipleship Pathways</td></tr>
              <tr><td>ADIP 113</td><td>Church Management</td></tr>
              <tr><td>ADIP 114</td><td>Leadership Skills II</td></tr>
              <tr><td>ADIP 115</td><td>Research Methodology</td></tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Master Classes</h2>
          <ul className={styles.courseList}>
            <li>1. MASTER CLASS IN BIBLE TRANSLATION</li>
            <li>2. MASTER CLASS IN CYBERTHEOLOGY</li>
            <li>3. MASTER CLASS IN AI-ASSISTED BIBLE STUDY</li>
            <li>4. MASTER CLASS IN WEALTH INTELLIGENCE</li>
            <li>5. MASTER CLASS IN CHURCH ADMINISTRATION</li>
            <li>6. MASTER CLASS IN MENTORING AND COACHING</li>
            <li>7. MASTER CLASS IN HUMAN RESOURCES MANAGEMENT IN CHURCH</li>
            <li>8. MASTER CLASS IN PREACHING SKILLS</li>
            <li>9. MASTER CLASS IN CHURCH PLANTING</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Higher Degree Programmes</h2>
          <div className={styles.higherDegrees}>
            <div className={styles.degreeCard}>
              <div className={styles.cardImageWrapper}>
                <Image src="/aaron-burden-TNlHf4m4gpI-unsplash.jpg" alt="Bachelor's Degree" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <h3>Bachelor's Degree</h3>
                <p>a. Bachelor of Arts in Religious Studies - (BA Religious Studies)</p>
                <p>b. Bachelor of Arts in Biblical Studies - (BA Biblical Studies)</p>
                <p>c. Bachelor of Arts in Theology - (BA Theology)</p>
                <p>d. Bachelor of Arts in Divinity - (BA Divinity)</p>
              </div>
            </div>
            <div className={styles.degreeCard}>
              <div className={styles.cardImageWrapper}>
                <Image src="/iwaria-inc-SESt1VL2D-w-unsplash.jpg" alt="Master's Degree" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <h3>Master's Degree</h3>
                <p>a. Master of Arts in Religious Studies - (MA Religious Studies)</p>
                <p>b. Master of Arts in Biblical Studies - (MA Biblical Studies)</p>
                <p>c. Master of Arts in Theology - (MA Theology)</p>
                <p>d. Master of Arts in Divinity - (MA Divinity)</p>
              </div>
            </div>
            <div className={styles.degreeCard}>
              <div className={styles.cardImageWrapper}>
                <Image src="/michael-odida-ejG7c5cHlHo-unsplash.jpg" alt="Doctorate" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <h3>Doctorate</h3>
                <p>a. Doctor of Theology - (Th.D)</p>
                <p>b. Doctor of Ministry - (D.Min)</p>
                <p>c. Doctor of Divinity - (D.Div)</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Awards and Recognition</h2>
          <div className={styles.awardsGrid}>
            <div className={styles.awardCard}>
              <div className={styles.awardIcon}>🏅</div>
              <div className={styles.awardContent}>
                <h3>1. Distinguished Christian Service Award</h3>
                <p>Recognizes exceptional and sustained Christian service.</p>
              </div>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.awardIcon}>🌟</div>
              <div className={styles.awardContent}>
                <h3>2. Lifetime Achievement Award in Christian Ministry</h3>
                <p>Recognizes a lifetime of outstanding ministry and service.</p>
              </div>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.awardIcon}>👑</div>
              <div className={styles.awardContent}>
                <h3>3. Outstanding Christian Leadership Award</h3>
                <p>Recognizes exemplary leadership in Christian institutions.</p>
              </div>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.awardIcon}>📜</div>
              <div className={styles.awardContent}>
                <h3>4. Distinguish Christian Rabbi Award</h3>
                <p>Recognize and honour exceptional biblical teachers and scholars.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>HBA Fellows</h2>
          <div className={styles.fellowsGrid}>
            <div className={styles.fellowCard}>
              <span className={styles.fellowBadge}>Distinguished Fellowship</span>
              <h3 className={styles.fellowTitle}>HBA Distinguished Fellow</h3>
              <span className={styles.fellowPostNominal}>F.H.B.A</span>
              <p className={styles.fellowDesc}>Conferred in recognition of extraordinary commitment to biblical scholarship, spiritual depth, and pioneering ministry leadership.</p>
            </div>
            <div className={styles.fellowCard}>
              <span className={styles.fellowBadge}>Honorary Fellowship</span>
              <h3 className={styles.fellowTitle}>HBA Honorary Fellow</h3>
              <span className={styles.fellowPostNominal}>H.F.H.B.A</span>
              <p className={styles.fellowDesc}>Conferred upon distinguished servants of God whose lifetime contributions have significantly impacted the Christian faith and community.</p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Apply for Any Programme</h2>
          <p>
            Begin your admission process today. Fill out our unified application form for Certificate, Diploma, Master Class, or Higher Degree programmes.
          </p>
          <div className={styles.ctaButtons}>
            <a 
              href={APPLICATION_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button button-primary"
            >
              Apply Online Now ↗
            </a>
            <Link href="/admissions" className="button button-secondary">
              View Admissions Guide
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
