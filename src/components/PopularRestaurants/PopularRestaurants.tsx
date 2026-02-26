import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { mockRestaurants } from "../../constants/mockData";
import styles from "./PopularRestaurants.module.css";
import { PopularRestaurantsStrings } from "./PopularRestaurants.strings";

function PopularRestaurants() {
    const popularRes = mockRestaurants.filter(res => res.isPopular);
    return (
        <section className={styles.popularRestaurantsContainer}>
            <p className={styles.sectionLabel}>{PopularRestaurantsStrings.POPULAR_RESTAURANTS_LABEL}</p>
            <div className={styles.cardsWrapper}>
                {popularRes.map((res) => (
                    <RestaurantCard 
                        key={res.id}
                        image={res.image}
                        name={res.name}
                        chef={res.chef}
                        rating={res.rating}
                    />
                ))}
            </div>
            <button className={styles.allRestaurantsButton}>{PopularRestaurantsStrings.RESTAURANT_BUTTON_LABEL}</button>
        </section>
    );
}

export default PopularRestaurants;