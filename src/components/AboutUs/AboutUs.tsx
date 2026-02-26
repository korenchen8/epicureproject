import styles from "./AboutUs.module.css";
import { AboutUsStrings } from "./AboutUs.strings";

function AboutUs() {
    const store_icons = [
        { src: "/assets/icons/apple-store.svg", alt: "App Store" },
        { src: "/assets/icons/google-play.svg", alt: "Google Play" }
    ]
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textSide}>
                    <h2 className={styles.title}>{AboutUsStrings.ABOUT_US_LABEL}</h2>
                    {AboutUsStrings.DESCRIPTION_PARAGRAPHS.map((text, index) => (
                        <p key={index} className={styles.description}>
                            {text}
                        </p>
                    ))}
                    <div className={styles.buttonContainer}>
                        {store_icons.map((btn) => (
                            <img
                                key={btn.alt}
                                src={btn.src}
                                alt={btn.alt}
                                className={styles.storeButton}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.logoSide}>
                    <img src="/assets/icons/epicure-big-logo.svg" alt="Epicure Logo" className={styles.bigLogo} />
                </div>
            </div>
        </section>
    );
}
export default AboutUs;