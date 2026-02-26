import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { label: "Contact Us", id: "contact" },
  { label: "Term of Use", id: "terms" },
  { label: "Privacy Policy", id: "privacy" }
];

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.linkList}>
        {FOOTER_LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} className={styles.link}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;