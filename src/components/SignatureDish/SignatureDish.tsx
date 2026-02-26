import DishCard from "../DishCard/DishCard";
import styles from "./SignatueDish.module.css";
import { mockDishes } from "../../constants/mockData";
import { SignatureDishStrings } from "./SiganuteDish.strings";

function SignatureDish() {
    const signatureDishes = mockDishes.slice(0, 3);
    return (
        <section className={styles.signatureDishContainer}>
            <p className={styles.sectionLabel}>{SignatureDishStrings.SIGNATURE_DISH_LABEL}</p>
            <div className={styles.cardsWrapper}>
                {signatureDishes.map((dish) => (
                    <DishCard
                        key={dish.id}
                        image={dish.image}
                        name={dish.name}
                        ingredients={dish.ingredients}
                        price={dish.price}
                        icons={dish.icons}
                    />
                ))}
            </div>
            <button className={styles.allRestaurantsButton}>
                {SignatureDishStrings.DISH_BUTTON_LABEL}
            </button>
        </section>
    );
}

export default SignatureDish;