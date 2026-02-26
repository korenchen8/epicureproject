import styles from "./DishCard.module.css";

interface DishProps {
    image: string;
    name: string;
    ingredients: string;
    price: number;
    icons?: string[];

}
function DishCard({ image, name, ingredients, price, icons }: DishProps) {
    return (
        <div className={`${styles.card}`}>
            <img src={image} alt={name} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{name}</h3>
                {icons && icons.length > 0 && (
                    <div className={styles.iconContainer}>
                        {icons.map((icon) => (
                            <img
                                key={icon}
                                src={`/assets/icons/${icon}.svg`}
                                className={styles.dishIcon}
                                alt={`${icon} icon`}
                            />
                        ))}
                    </div>
                )}
            </div>
            <p className={styles.cardIngredients}>{ingredients}</p>
            <div className={styles.footer}>
                <span className={styles.price}>
                    <span className={styles.currency}>₪</span>{price}
                </span>

            </div>
        </div>

    );
};

export default DishCard;