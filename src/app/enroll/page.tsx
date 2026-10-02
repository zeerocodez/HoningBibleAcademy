import Header from '@/components/Header';
import styles from './page.module.css';

export default function EnrollPage() {
  return (
    <>
      <Header />
      <main className="container section">
        <div className={styles.enrollContainer}>
          <h1 className="text-center">Enroll in Honing Bible Academy</h1>
          <p className={`text-center ${styles.subtitle}`}>
            Join our community and begin your journey to a deeper understanding of Scripture.
          </p>

          <div className={styles.layout}>
            {/* Enrollment Form */}
            <div className={styles.formSection}>
              <h2>Your Details</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="password">Create a Password</label>
                  <input type="password" id="password" name="password" required />
                  <span className={styles.helpText}>Minimum 8 characters.</span>
                </div>

                <div className={styles.paymentNotice}>
                  <p>
                    <em>Payment integration will be configured once the provider credentials are supplied. 
                    This form is currently a mockup.</em>
                  </p>
                </div>

                <button type="button" className={`button button-primary ${styles.submitButton}`}>
                  Proceed to Payment
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className={styles.summarySection}>
              <div className={styles.summaryCard}>
                <h2>Order Summary</h2>
                <div className={styles.summaryItem}>
                  <span>Certificate in Biblical Studies</span>
                  <span>₦75,000 / $50</span>
                </div>
                <div className={styles.summaryTotal}>
                  <span>Total</span>
                  <span>₦75,000 / $50</span>
                </div>
                <ul className={styles.includesList}>
                  <li>✓ Lifetime access to course materials</li>
                  <li>✓ Private learning journal</li>
                  <li>✓ Progress tracking</li>
                  <li>✓ Downloadable resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
