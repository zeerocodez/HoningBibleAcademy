'use client';

import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: "Emmanuel O.",
    role: "Diploma Student",
    content: "The Biblical narrative course completely shifted my perspective. The teachings are deep yet so accessible.",
    image: "/tobi-oshinnaike-ajWHOi2r2uA-unsplash.jpg"
  },
  {
    name: "Sarah M.",
    role: "Youth Ministry Lead",
    content: "HBA equipped me with practical skills I use every Sunday. The digital library is an absolute game changer.",
    image: "/gift-habeshaw-1nk55s0BabU-unsplash.jpg"
  },
  {
    name: "David K.",
    role: "Advanced Certificate",
    content: "Affordable, structured, and profoundly insightful. I highly recommend Honing Bible Academy to any believer.",
    image: "/patrick-otim-Td7N1tsJoC4-unsplash.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.header}>
          <h2>Stories from our Students</h2>
          <p>Join hundreds of believers growing in their faith and leadership.</p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={styles.card}>
              <p className={styles.quote}>"{t.content}"</p>
              <div className={styles.author}>
                <div 
                  className={styles.avatar} 
                  style={{ backgroundImage: `url(${t.image})` }} 
                />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
