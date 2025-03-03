import Container from "../Container/container";
import Wrapper from "../Wrapper/wrapper";
import styles from "./imageSection.module.css"

const ImageSection = ({imagePath, children}) => {
    const defaultImage = "/image/dogmeat.jpg";

    return (
        <div className={styles.imageSection} style={{
            backgroundImage: `url(${imagePath || defaultImage})`,

        }}>
            <div className={styles.optionalChild}>{children}</div>
        </div>
    )
}

export default ImageSection;