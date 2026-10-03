'use client';

import { useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';

const images = [
  "https://images.unsplash.com/photo-1525926476822-cf8f972dfa66?q=80&w=1200&auto=format&fit=crop", // youth studying
  "https://images.unsplash.com/photo-1526657782461-9fe13401a671?q=80&w=1200&auto=format&fit=crop", // diverse group
  "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1200&auto=format&fit=crop", // vibrant discussion
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {images.map((img, index) => (
        <div
          key={img}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className={styles.indicators}>
        {images.map((_, idx) => (
          <span 
            key={idx} 
            className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
