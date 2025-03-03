import styles from "./ImageSection.module.css"

const ImageSection = ({imagePath}) => {
    const defaultImage = "/image/dogmeat.jpg";

    return (
        <div className={styles.imageSection} style={{
            backgroundImage: `url(${imagePath || defaultImage})`,

        }}>
        </div>
    )
}

export default ImageSection;