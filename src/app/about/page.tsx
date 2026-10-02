import Header from '@/components/Header';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container section">
        <div className={styles.aboutContainer}>
          <h1 className="text-center">About Honing Bible Academy</h1>
          
          <div className={styles.content}>
            <section className={styles.textSection}>
              <h2>Our Purpose</h2>
              <p>
                At Honing Bible Academy, our goal is to help you grow in confidence and go deeper in Scripture. 
                We believe that the Bible is a unified story that leads to Jesus, and understanding that story 
                changes how we live today. We provide clear, structured, and accessible theological education 
                for everyday believers.
              </p>
            </section>
            
            <section className={styles.textSection}>
              <h2>Accreditation & Quality</h2>
              <p>
                Honing Bible Academy is fully accredited by <strong>The Nigeria Council for Theological Studies and Christian Education (NICTSCE)</strong>. 
                This ensures that our curriculum meets rigorous academic and theological standards, providing you with a certificate you can trust.
              </p>
            </section>

            <section className={styles.textSection}>
              <h2>Our Learning Approach</h2>
              <ul className={styles.approachList}>
                <li>
                  <strong>Seeing the Bible’s larger narrative:</strong> We don't just study isolated verses; 
                  we look at how everything fits into the grand story of redemption.
                </li>
                <li>
                  <strong>Engaging with key Christian beliefs:</strong> We tackle the tough questions and 
                  explore the foundational doctrines of the historic Christian faith.
                </li>
                <li>
                  <strong>Building a reflective study practice:</strong> Through our learning journal and 
                  guided questions, we move from head knowledge to heart transformation.
                </li>
              </ul>
            </section>

            <section className={styles.instructorSection}>
              <h2>Founder & Instructor</h2>
              <div className={styles.instructorCard}>
                <div className={styles.instructorImagePlaceholder}>
                  <img src="/founder.jpg" alt="Dr. Clifford Stevens" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
                </div>
                <div className={styles.instructorBio}>
                  <h3>Dr. Clifford Stevens</h3>
                  <p>
                    <em>Founder, Honing Bible Academy</em>
                  </p>
                  <p>
                    Dr. Clifford Stevens is a dedicated theologian and educator with a passion for bringing the depth of biblical scholarship to everyday believers. Under his leadership, the academy has grown to offer 17 specialized certificate programs designed to equip the church for modern ministry.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
