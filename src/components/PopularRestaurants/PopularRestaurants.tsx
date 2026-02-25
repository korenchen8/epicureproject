import Card from "../Card/Card";
import { mockRestaurants } from "../../constants/mockData";
import styles from "./PopularRestaurants.module.css";
import { PopularRestaurantsStrings } from "./PopularRestaurants.strings";

function PopularRestaurants() {
    return (
        <section className={styles.popularRestaurantsContainer}>
        <p className={styles.sectionLabel}>{PopularRestaurantsStrings.POPULAR_RESTAURANTS_LABEL}</p>
        <Card 
            image={mockRestaurants[0].image}
            title={mockRestaurants[0].name}
            subtitle={mockRestaurants[0].chef}
            type="restaurant"
        />
        </section>
    );
}

export default PopularRestaurants;