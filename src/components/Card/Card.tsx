
import styles from './Card.module.css';

interface CardProps {
  image: string;
  title: string;
  subtitle?: string; 
  extraInfo?: string;
  type: 'restaurant' | 'dish';
}

function Card({ image, title, subtitle, extraInfo, type }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
        {extraInfo && <span className={styles.extraInfo}>{extraInfo}</span>}
      </div>
    </div>
  );
};

export default Card;