import { useState } from 'react';
import {mockDishes,mockRestaurants } from '../../constants/mockData';
import styles from './Hero.module.css';

function Hero() {
    const [searchValue, setSearchValue] = useState('');

  
  const filteredRestaurants = mockRestaurants.filter((res) =>
    res.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );
  const filteredDishes = mockDishes.filter((dish) =>
    dish.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );
  return (
    <section className={styles.heroContainer}>
      <div className={styles.searchWrapper}>
        <p className={styles.heroText}>Epicure works with the top chef restaurants in Tel Aviv</p>

      <div className={styles.inputContainer}>
          <img src="/assets/icons/search.svg" alt="" className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search for restaurant, cuisine, chef" 
            className={styles.searchInput}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
        {searchValue.length > 0 && (
          <div className={styles.resultsDropdown}>
            {filteredRestaurants.length > 0 && (
              <div className={styles.resultSection}>
                <span className={styles.sectionLabel}>Restaurants:</span>
                {filteredRestaurants.map((res) => (
                  <div key={res.id} className={styles.resultItem}>
                    {res.name}
                  </div>
                ))}
              </div>
            )}
            {filteredDishes.length > 0 && (
              <div className={styles.resultSection}>
                <span className={styles.sectionLabel}>Cuisine:</span>
                {filteredDishes.map((dish) => (
                  <div key={dish.id} className={styles.resultItem}>
                    {dish.name}
                  </div>
                ))}
              </div>
            )}
            {filteredRestaurants.length === 0 && filteredDishes.length === 0 && (
              <div className={styles.sectionLabel}>No results found</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;