'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AnimatedSection.module.css';

export default function AnimatedSection({ 
  children, 
  className = '',
  delay = 0,
  id
}: { 
  children: React.ReactNode, 
  className?: string,
  delay?: number,
  id?: string
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, no need to observe anymore
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, {
      rootMargin: '0px 0px -100px 0px'
    });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={domRef}
      className={`${styles.fadeInUp} ${isVisible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
