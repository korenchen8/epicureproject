import { useState } from "react";
import { HEADER_STRINGS } from "./Header.strings";
import styles from "./Header.module.css";


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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src="/assets/icons/hamburger.svg" alt="menu" />
          </button>
        </div>


        <div className={styles.logoSection}>
          <img src="/assets/icons/epicure-logo.svg" alt="Epicure Logo" className={styles.logo} />
        </div>


        <div className={styles.rightSection}>
          {icons.map((icon, index) => (
            <button key={index} className={styles.iconBtn} type="button">
              <img src={icon.src} alt={icon.alt} className={styles.icon} />
            </button>
          ))}
        </div>


        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <button onClick={() => setIsMenuOpen(false)} className={styles.closeBtn}><img src="/assets/icons/x-icon.svg" alt="shopping bag" /></button>
            <nav>
              <ul>
                <li>{HEADER_STRINGS.RESTAURANTS}</li>
                <li>{HEADER_STRINGS.CHEFS}</li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header;