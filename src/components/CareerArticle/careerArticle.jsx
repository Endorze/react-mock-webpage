import styles from "./careerArticle.module.css"

const CareerArticle = ({jobTitle, department, location, href}) => {
    return (
        <div className={styles.careerItem}>
            <h3>{jobTitle}</h3>
            <p>
                {department}
            </p>
            <p>{location}</p>
            <a href={`/${href}`}>More Information</a>
        </div>
    )
}

export default CareerArticle;