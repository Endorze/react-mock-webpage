import styles from "./faqItem.module.css"

const FaqItem = ({navPath, title, description, imagePath}) => {
    return (
        <div className={styles.faqItem}>
            <a href={`${navPath}`}>
                <img src={`${imagePath}`} />
                <h2>{title}</h2>
                <p>{description}</p>
            </a>
        </div>
    )
}

export default FaqItem;