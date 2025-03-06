import styles from "./profileItem.module.css";
import favoriteLogo from "/image/about/profile/sweden.png"

const ProfileItem = ({imagePath, name, description}) => {
    return (
        <div className={styles.profileItem}>
            <div className={styles.imageDiv}>
                <div className={styles.countryFlag}>
                    <img src={favoriteLogo} />
                </div>
                <img src={`${imagePath}`} />
            </div>
            <div className={styles.horizontal}>
                <div>
                    <h2>{name}</h2>
                    <p>Frontend Developer</p>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProfileItem;