'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';

const images = [
  "/iwaria-inc-SESt1VL2D-w-unsplash.jpg", 
  "/maiye-jeremiah-1eXBWRwun34-unsplash.jpg", 
  "/k-studios-eyA8kdL_10E-unsplash.jpg", 
  "/michael-odida-ejG7c5cHlHo-unsplash.jpg"
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
