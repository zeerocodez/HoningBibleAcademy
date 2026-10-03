'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';

const images = [
  "https://images.unsplash.com/photo-1571260899304-425dea5cfd04?w=1200&q=80", // African students studying
  "https://images.unsplash.com/photo-1531123414708-1e6d6c068f37?w=1200&q=80", // African youth learning
  "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&q=80", // African student smiling
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80"  // Group of African students
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
        >
          <Image 
            src={img} 
            alt="Students at Honing Bible Academy" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority={index === 0} 
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
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
