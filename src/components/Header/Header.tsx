import React,{useState} from "react";
import styles from "./Header.module.css";


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        
   
        <div className={styles.leftSection}>
          <button 
            className={styles.hamburgerBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src="/assets/icons/hamburger.svg" alt="menu" />
          </button>
        </div>

     
        <div className={styles.logoSection}>
          <img src="/assets/icons/epicure-logo.svg" alt="Epicure Logo" className={styles.logo} />
        </div>

      
        <div className={styles.rightSection}>
            <button className={styles.iconBtn} type="button">
          <img src="/assets/icons/search.svg" alt="search" className={styles.icon} />
          </button>
          <button className={styles.iconBtn} type="button">
          <img src="/assets/icons/login.svg" alt="user" className={styles.icon} />
          </button>
          <button className={styles.iconBtn} type="button">
          <img src="/assets/icons/bag.svg" alt="shopping bag" className={styles.icon} />
          </button>
        </div>
      </div>

   
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button onClick={() => setIsMenuOpen(false)} className={styles.closeBtn}><img src="/assets/icons/x-icon.svg" alt="Close menu"/></button>
          <nav>
            <ul>
              <li>Restaurants</li>
              <li>Chefs</li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header;