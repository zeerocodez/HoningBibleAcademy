import PageHero from '@/components/PageHero';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" imageSrc="/aaron-burden-TNlHf4m4gpI-unsplash.jpg" />
      <main className="container section">
        <div className={styles.contactContainer}>
          <div className={styles.header}>
            <p className={styles.subtitle}>
              Have a question about a course or need technical support? We'd love to hear from you.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.infoSection}>
              <h2>Get in Touch</h2>
              <p>Fill out the form and our team will get back to you within 24-48 hours.</p>
              
              <div className={styles.contactDetails}>
                <div className={styles.detailItem}>
                  <strong>Email:</strong>
                  <span>support@honingbibleacademy.org.ng</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Office Hours:</strong>
                  <span>Monday - Friday, 9am - 5pm GMT</span>
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" className={styles.select} required>
                    <option value="">Select a topic...</option>
                    <option value="course_question">Course Question</option>
                    <option value="technical_support">Technical Support</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>

                <button type="submit" className="button button-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
