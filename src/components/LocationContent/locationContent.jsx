import styles from "./locationContent.module.css";
import HorizontalDisplay from "../HorizontalDisplay/horizontalDisplay.jsx"

const LocationContent = ({ title, description, categories }) => {
    return (
        <div className={styles.locationContent}>
            <div className={styles.locationContentText}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
                <div className={styles.categories}>
                    {Object.entries(categories).map(([category, items]) => (
                        <div key={category} className={styles.category}>
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default LocationContent;
