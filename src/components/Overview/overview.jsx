import Container from "../Container/container";
import styles from "./overview.module.css";

const Overview = ({overviewTitle, children}) => {
    return (
        <div className={styles.overview}>
            <Container>
                <div >
                    <h2>{overviewTitle}</h2>
                    <div className={styles.overviewSummary}>
                    <p>{children}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Overview;