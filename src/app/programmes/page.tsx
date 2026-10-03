import Image from 'next/image';
import styles from './page.module.css';
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
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Diploma Programme</h2>
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
              <tr><td>DIP 114</td><td>Research Methodology I</td></tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Advanced Diploma Programme</h2>
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
              <tr><td>ADIP 114</td><td>Research Methodology II</td></tr>
            </tbody>
          </table>
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
              </div>
            </div>
            <div className={styles.degreeCard}>
              <div className={styles.cardImageWrapper}>
                <Image src="/iwaria-inc-SESt1VL2D-w-unsplash.jpg" alt="Master's Degree" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <h3>Master's Degree</h3>
              </div>
            </div>
            <div className={styles.degreeCard}>
              <div className={styles.cardImageWrapper}>
                <Image src="/michael-odida-ejG7c5cHlHo-unsplash.jpg" alt="Doctorate" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <h3>Doctorate</h3>
                <p>a. Doctor of Divinity (D. Div.)</p>
                <p>b. Doctor of Theology (Th.D.)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
