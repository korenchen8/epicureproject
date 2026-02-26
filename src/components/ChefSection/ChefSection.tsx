import styles from "./ChefSection.module.css";
import { ChefSectionStrings } from "./ChefSection.strings";
import {mockRestaurants, mockChefs} from "../../constants/mockData";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useMemo } from "react";

function ChefSection() {
  const chefOfTheWeek = useMemo(() => {
        return mockChefs.find(chef => chef.isChefOfTheWeek);
    }, []);
    const chefRestaurants = useMemo(() => {
        if (!chefOfTheWeek) return [];
        return mockRestaurants.filter(res => 
            chefOfTheWeek.restaurantIds.includes(res.id)
        );
    }, [chefOfTheWeek]);
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
        <h3 className={styles.subTitle}>{chefOfTheWeek.name.split(' ')[0]}{ChefSectionStrings.CHEFS_RESTAURANTS}</h3>
        <div className={styles.restaurantsGrid}>
          {chefRestaurants.map((res) => (
            <RestaurantCard 
              key={res.id}
              image={res.image}
              name={res.name}
              isChefSection={true}
            />
          ))}
        </div>
      </div>
    </section>
  );



};
export default ChefSection;