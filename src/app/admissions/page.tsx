import PageHero from '@/components/PageHero';
import styles from './page.module.css';
import Link from 'next/link';
import { APPLICATION_FORM_URL } from '@/lib/constants';

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

        <div className={styles.ctaContainer} id="apply">
          <h2>Ready to Apply?</h2>
          <p style={{ maxWidth: '600px', color: 'var(--color-text-light)' }}>
            Complete the official application form below or open it in a new window to begin your admission process.
          </p>
          <div className={styles.actionButtons}>
            <a 
              href={APPLICATION_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button button-primary"
            >
              Apply Now (Open Form) ↗
            </a>
            <Link href="/login" className="button button-secondary">
              Existing Students Portal
            </Link>
          </div>

          <div className={styles.formWrapper}>
            <iframe 
              src={APPLICATION_FORM_URL} 
              className={styles.formIframe}
              title="Honing Bible Academy Application Form"
            >
              Loading application form…
            </iframe>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
