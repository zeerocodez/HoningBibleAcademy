import styles from './page.module.css';
import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      question: "Do I need prior theological training?",
      answer: "No, our courses are designed for everyday believers. We start with foundational concepts and build from there."
    },
    {
      question: "Are the courses self-paced or live?",
      answer: "Our core curriculum is self-paced, allowing you to study when it fits your schedule. We occasionally offer live cohort options which will be clearly marked."
    },
    {
      question: "How long does a course take?",
      answer: "Most students complete a 12-module course in about 12 weeks, dedicating 2-3 hours per week to videos and reading."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 14-day money-back guarantee if you find the course isn't the right fit for you."
    }
  ];

  return (
    <>
      <main className="container section">
        <div className={styles.faqContainer}>
          <h1 className="text-center">Frequently Asked Questions</h1>
          <p className={`text-center ${styles.subtitle}`}>
            Everything you need to know about learning with Honing Bible Academy.
          </p>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details key={index} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  {faq.question}
                  <span className={styles.icon}>+</span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className={styles.contactPrompt}>
            <h2>Still have questions?</h2>
            <p>We're here to help. Reach out to our support team.</p>
            <Link href="/contact" className="button button-secondary">Contact Us</Link>
          </div>
        </div>
      </main>
    </>
  );
}
