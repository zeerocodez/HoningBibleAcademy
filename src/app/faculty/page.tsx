import Image from 'next/image';
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
            <div className={styles.imageWrapper}>
              <Image src="/founder.jpg" alt="Clifford Sunday Stephen, Ph.D., D.Div." fill className={styles.image} style={{ objectFit: 'cover' }} />
            </div>
            <h3>Clifford Sunday Stephen, Ph.D., D.Div.</h3>
            <p className={styles.role}>Founder / President</p>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.imageWrapper}>
              <Image src="/Mrs. Ubokko Clifford Stephen.jpeg" alt="Mrs. Ubokko Clifford Stephen" fill className={styles.image} style={{ objectFit: 'cover' }} />
            </div>
            <h3>Mrs. Ubokko Clifford Stephen</h3>
            <p className={styles.role}>Co-founder / Vice President</p>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.imageWrapper}>
              <Image src="/Prof. Mbosowo Bassey Udok.jpeg" alt="Prof. Mbosowo Bassey Udok" fill className={styles.image} style={{ objectFit: 'cover' }} />
            </div>
            <h3>Prof. Mbosowo Bassey Udok</h3>
            <p className={styles.role}>Board Chairman</p>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.imageWrapper}>
              <Image src="/Akpan Usenobong, Ph.D.jpeg" alt="Usenobong Akpan, Ph.D" fill className={styles.image} style={{ objectFit: 'cover' }} />
            </div>
            <h3>Usenobong Akpan, Ph.D</h3>
            <p className={styles.role}>Board Member</p>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.imageWrapper}>
              <Image src="/Pastor Emmanuel Effiong.jpeg" alt="Pastor Emmanuel Effiong" fill className={styles.image} style={{ objectFit: 'cover' }} />
            </div>
            <h3>Pastor Emmanuel Effiong</h3>
            <p className={styles.role}>Head of Digital academy</p>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.imageWrapper}>
              <Image src="/Pastor Mfoniso James.jpeg" alt="Pastor Mfoniso James" fill className={styles.image} style={{ objectFit: 'cover' }} />
            </div>
            <h3>Pastor Mfoniso James</h3>
            <p className={styles.role}>Publicity Secretary</p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
