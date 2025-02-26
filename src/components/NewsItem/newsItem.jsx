import styles from "./newsItem.module.css"

const NewsItem = ({imgPath, title, date, text, hrefPath}) => {
    return (
        <div className={styles.newsItem}>
            <img src={`${imgPath}`} />
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{text}</p>
            <div className={styles.readMore}>
            <a className="readMoreButton" href={`/${hrefPath}`}>Read More</a>
            </div>
        </div>
    )
}

export default NewsItem;