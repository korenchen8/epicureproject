import { useState } from 'react';
import {mockDishes,mockRestaurants } from '../../constants/mockData';
import styles from './Hero.module.css';
import { HERO_STRINGS } from './Hero.strings';

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
        <p className={styles.heroText}>{HERO_STRINGS.HERO_TEXT}</p>

      <div className={styles.inputContainer}>
          <img src="/assets/icons/search.svg" alt="" className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder={HERO_STRINGS.SEARCH_PLACEHOLDER}
            className={styles.searchInput}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
        {searchValue.length > 0 && (
          <div className={styles.resultsDropdown}>
            {filteredRestaurants.length > 0 && (
              <div className={styles.resultSection}>
                <span className={styles.sectionLabel}>{HERO_STRINGS.RESTAURANTS_LABEL}</span>
                {filteredRestaurants.map((res) => (
                  <div key={res.id} className={styles.resultItem}>
                    {res.name}
                  </div>
                ))}
              </div>
            )}
            {filteredDishes.length > 0 && (
              <div className={styles.resultSection}>
                <span className={styles.sectionLabel}>{HERO_STRINGS.CUISINE_LABEL}</span>
                {filteredDishes.map((dish) => (
                  <div key={dish.id} className={styles.resultItem}>
                    {dish.name}
                  </div>
                ))}
              </div>
            )}
            {filteredRestaurants.length === 0 && filteredDishes.length === 0 && (
              <div className={styles.sectionLabel}>{HERO_STRINGS.NO_RESULTS_LABEL}</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;