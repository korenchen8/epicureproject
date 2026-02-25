import { useState } from 'react';
import styles from './Header.module.css';
import { HEADER_STRINGS } from './Header.strings';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icons = [
    { src: "/assets/icons/search.svg", alt: "search" },
    { src: "/assets/icons/login.svg", alt: "user" },
    { src: "/assets/icons/bag.svg", alt: "shopping bag" },
  ];


  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>

        <div className={styles.leftSection}>
          <button
            className={styles.hamburgerBtn}
            onClick={() => setIsMenuOpen(true)}
          >
            <img src="/assets/icons/hamburger.svg" alt="Menu" />
          </button>

          <div className={styles.logoSection}>
            <img
              src="/assets/icons/epicure-logo.svg"
              alt="EPICURE Logo"
              className={styles.logo}
            />
            <span className={styles.logoText}>{HEADER_STRINGS.EPICURE}</span>
          </div>

          <nav className={styles.desktopNav}>
            <a href="#restaurants" className={styles.navLink}>
              {HEADER_STRINGS.RESTAURANTS}
            </a>
            <a href="#chefs" className={styles.navLink}>
              {HEADER_STRINGS.CHEFS}
            </a>
          </nav>
        </div>

        <div className={styles.rightSection}>
          {icons.map((icon, index) => (
            <button key={index} className={`${styles.iconBtn} ${styles.mobileSearchIcon}`} type="button">
              <img src={icon.src} alt={icon.alt} className={styles.icon} />
            </button>
          ))}

        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button onClick={() => setIsMenuOpen(false)} className={styles.closeBtn}>
            <img src="/assets/icons/x-icon.svg" alt="Close Menu" />
          </button>
          <nav>
            <ul>
              <li>{HEADER_STRINGS.RESTAURANTS}</li>
              <li>{HEADER_STRINGS.CHEFS}</li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;