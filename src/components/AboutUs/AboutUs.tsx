import styles from "./AboutUs.module.css";
import { AboutUsStrings } from "./AboutUs.strings";

function AboutUs() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textSide}>
                    <h2 className={styles.title}>{AboutUsStrings.ABOUT_US_LABEL}</h2>
                    <p className={styles.description}>
                        {AboutUsStrings.ABOUT_US_DESCRIPTION_PARAGRAPH_1}
                    </p>
                    <p className={styles.description}>
                        {AboutUsStrings.ABOUT_US_DESCRIPTION_PARAGRAPH_2}
                    </p>
                    <div className={styles.buttonContainer}>
                        <img src="/assets/icons/apple-store.svg" alt="App Store" />
                        <img src="/assets/icons/google-play.svg" alt="Google Play" />
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