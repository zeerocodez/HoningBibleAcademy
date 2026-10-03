import PageHero from '@/components/PageHero';
import styles from './page.module.css';

export default function Events() {
  return (
    <>
      <PageHero title="HBA Events" imageSrc="/gift-habeshaw-1nk55s0BabU-unsplash.jpg" />
      <main className={styles.main}>
        <div className="container" style={{ marginTop: '2rem' }}>
        
        <div className={styles.eventsGrid}>
          <div className={styles.eventCard}>
            <h3>WORD & SPIRIT CONFERENCE</h3>
            <p>Annual gathering for spiritual renewal and deep teaching of the Word.</p>
          </div>
          <div className={styles.eventCard}>
            <h3>BIBLICAL STUDIES SEMINAR</h3>
            <p>Academic symposium focusing on theological and exegetical research.</p>
          </div>
          <div className={styles.eventCard}>
            <h3>SCHOLARS' FORUM</h3>
            <p>A platform for engaging contemporary issues from a biblically informed perspective.</p>
          </div>
          <div className={styles.eventCard}>
            <h3>HONE AFRICA LEADERSHIP SUMMIT</h3>
            <p>Equipping ministers and leaders for transformational impact.</p>
          </div>
          <div className={styles.eventCard}>
            <h3>RESEARCH WORKSHOP</h3>
            <p>Practical sessions on methodology, writing, and biblical research tools.</p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
