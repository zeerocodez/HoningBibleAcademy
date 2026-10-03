import Image from 'next/image';
import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  imageSrc: string;
}

export default function PageHero({ title, imageSrc }: PageHeroProps) {
  return (
    <div className={styles.heroContainer}>
      <Image 
        src={imageSrc} 
        alt={title} 
        fill 
        priority
        className={styles.heroImage} 
      />
      <div className={styles.overlay}>
        <div className="container">
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </div>
  );
}
