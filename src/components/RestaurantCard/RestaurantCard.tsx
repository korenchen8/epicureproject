
import styles from './RestaurantCard.module.css';

interface RestaurantProps {
  image: string;
  name: string;
  chef: string;
  rating: number;
}

function RestaurantCard({ image, name, chef, rating }: RestaurantProps) {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);
  return (
    <div className={`${styles.card}`}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardChef}>{chef}</p>
        <div className={styles.rating}>
          {stars.map((isFull, index) => (
            <img 
              key={index} 
              src={isFull ? "/assets/icons/star.svg" : "/assets/icons/empty-star.png"}
              alt="star" 
              className={styles.star} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;