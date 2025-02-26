import Container from "../Container/container";
import styles from "./overview.module.css";

const Overview = ({overviewTitle, overviewText}) => {
    return (
        <div className={styles.overview}>
            <Container>
                <div >
                    <h2>{overviewTitle}</h2>
                    <div className={styles.overviewSummary}>
                    <p>{overviewText}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Overview;