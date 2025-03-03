import styles from "./profileItem.module.css";

const ProfileItem = ({imagePath, name, description}) => {
    return (
        <div className={styles.profileItem}>
            <div className={styles.imageDiv}>
                <img src={`${imagePath}`}></img>
            </div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProfileItem;