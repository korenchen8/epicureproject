import styles from "./IconMeaning.module.css";
import { IconMeaningStrings } from "./IconMeaning.strings";

function IconMeaning() {
    const icons = [
        { img: "/assets/icons/spicy.svg", label: "Spicy" },
        { img: "/assets/icons/vegitarian.svg", label: "Vegitarian" },
        { img: "/assets/icons/vegan.svg", label: "Vegan" },
    ];
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{IconMeaningStrings.ICON_MEANING_LABEL}</h2>
            <div className={styles.iconsWrapper}>
                {icons.map((item) => (
                    <div key={item.label} className={styles.iconItem}>
                        <img src={item.img} alt={item.label} className={styles.iconImg} />
                        <span className={styles.iconLabel}>{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default IconMeaning;