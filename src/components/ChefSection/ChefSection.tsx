import styles from "./ChefSection.module.css";
import { ChefSectionStrings } from "./ChefSection.strings";
import {mockRestaurants, mockChefs} from "../../constants/mockData";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

function ChefSection() {
    const chefOfTheWeek = mockChefs.find(chef => chef.isChefOfTheWeek); 
    const chefRestaurants = mockRestaurants.filter(res => 
    chefOfTheWeek?.restaurantIds.includes(res.id)
  );
  if (!chefOfTheWeek) return null;
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>{ChefSectionStrings.CHEF_SECTION_LABEL}</h2>
      
      <div className={styles.upperContent}>
        <div className={styles.imageWrapper}>
          <img 
            src={chefOfTheWeek.image} 
            alt={chefOfTheWeek.name} 
            className={styles.chefImg} 
          />
          <div className={styles.nameOverlay}>
            {chefOfTheWeek.name}
          </div>
        </div>
        
        <p className={styles.description}>
          {chefOfTheWeek.description}
        </p>
      </div>

      <div className={styles.lowerContent}>
        <h3 className={styles.subTitle}>{chefOfTheWeek.name.split(' ')[0]}'s Restaurants</h3>
        <div className={styles.restaurantsGrid}>
          {chefRestaurants.map((res) => (
            <RestaurantCard 
              key={res.id}
              image={res.image}
              name={res.name}
              chef={res.chef}
              rating={res.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );



};
export default ChefSection;