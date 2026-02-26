import { useState, useMemo } from 'react';
import { mockDishes, mockRestaurants } from '../../constants/mockData';
import styles from './Hero.module.css';
import { HERO_STRINGS } from './Hero.strings';
import type { IDish, IRestaurant } from '../../types/interfaces';

function Hero() {
  const [searchValue, setSearchValue] = useState('');

  const filteredRestaurants = useMemo(() => {
    return mockRestaurants.filter((res) =>
      res.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );
  }, [searchValue]);

  const filteredDishes = useMemo(() => {
    return mockDishes.filter((dish) =>
      dish.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );
  }, [searchValue]);
  const renderResultSection = (label: string, items: (IRestaurant | IDish)[]) => {
    if (items.length === 0) return null;
    return (
      <div className={styles.resultSection}>
        <span className={styles.sectionLabel}>{label}</span>
        {items.map((item) => (
          <div key={item.id} className={styles.resultItem}>
            {item.name}
          </div>
        ))}
      </div>
    );
  };

  const hasResults = filteredRestaurants.length > 0 || filteredDishes.length > 0;
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
            {renderResultSection(HERO_STRINGS.RESTAURANTS_LABEL, filteredRestaurants)}
            {renderResultSection(HERO_STRINGS.CUISINE_LABEL, filteredDishes)}
            
            {!hasResults && (
              <div className={styles.sectionLabel}>{HERO_STRINGS.NO_RESULTS_LABEL}</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;