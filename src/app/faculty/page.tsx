import PageHero from '@/components/PageHero';
import styles from './page.module.css';

export default function Faculty() {
  return (
    <>
      <PageHero title="HBA Faculty" imageSrc="/k-studios-eyA8kdL_10E-unsplash.jpg" />
      <main className={styles.main}>
        <div className="container" style={{ marginTop: '2rem' }}>
        
        <div className={styles.facultyGrid}>
          <div className={styles.facultyCard}>
            <div className={styles.imagePlaceholder}>1</div>
            <h3>Clifford Sunday Stephen, Ph.D., D.Div.</h3>
            <p className={styles.role}>Founder / President</p>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.imagePlaceholder}>2</div>
            <h3>Mrs. Ubokko Clifford Stephen</h3>
            <p className={styles.role}>Co-founder / Vice President</p>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.imagePlaceholder}>3</div>
            <h3>Prof. Mbosowo Bassey Udok</h3>
            <p className={styles.role}>Board Chairman</p>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.imagePlaceholder}>4</div>
            <h3>Usenobong Akpan, Ph.D</h3>
            <p className={styles.role}>Board Member</p>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.imagePlaceholder}>5</div>
            <h3>Pastor Emmanuel Effiong</h3>
            <p className={styles.role}>Director of Digital Education and Online Services</p>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.imagePlaceholder}>6</div>
            <h3>Pastor Mfoniso James</h3>
            <p className={styles.role}>Publicity Secretary</p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
