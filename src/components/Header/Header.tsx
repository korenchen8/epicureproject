import React,{useState} from "react";
import styles from "./Header.module.css";


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        
        {/* Left: Hamburger for Mobile */}
        <div className={styles.leftSection}>
          <button 
            className={styles.hamburgerBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src="/assets/icons/hamburger.svg" alt="menu" />
          </button>
        </div>

        {/* Center: Logo */}
        <div className={styles.logoSection}>
          <img src="/assets/icons/epicure-logo.svg" alt="Epicure Logo" className={styles.logo} />
        </div>

        {/* Right: Icons */}
        <div className={styles.rightSection}>
          <img src="/assets/icons/search.svg" alt="search" className={styles.icon} />
          <img src="/assets/icons/login.svg" alt="user" className={styles.icon} />
          <img src="/assets/icons/bag.svg" alt="shopping bag" className={styles.icon} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button onClick={() => setIsMenuOpen(false)} className={styles.closeBtn}>X</button>
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