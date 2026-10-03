import PageHero from '@/components/PageHero';
import styles from './page.module.css';
import Link from 'next/link';

export default function Admissions() {
  return (
    <>
      <PageHero title="Admissions System" imageSrc="/rod-long-DRgrzQQsJDA-unsplash.jpg" />
      <main className={styles.main}>
        <div className="container" style={{ marginTop: '2rem' }}>
        
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepNum}>1</div>
            <h3>Create Account</h3>
            <p>Register your details to access the portal.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>2</div>
            <h3>Select Programme</h3>
            <p>Choose your desired certificate or degree.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>3</div>
            <h3>Complete Application</h3>
            <p>Fill in the required academic and personal information.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>4</div>
            <h3>Upload Documents</h3>
            <p>Submit your credentials securely.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>5</div>
            <h3>Submit</h3>
            <p>Pay application fees and finalize.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>6</div>
            <h3>Application Review</h3>
            <p>Our admission board reviews your application.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>7</div>
            <h3>Admission Decision</h3>
            <p>Receive your admission letter and next steps.</p>
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <Link href="/login" className="button button-primary">Apply Now</Link>
        </div>
      </div>
    </main>
    </>
  );
}
