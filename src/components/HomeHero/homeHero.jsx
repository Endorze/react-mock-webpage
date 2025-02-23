import styles from "./homeHero.module.css"
import Container from "../Container/container.jsx"

const HomeHero = () => {
    return <div className={styles.hero}>
        <Container className={styles.heroContainer}>
            <div className={styles.heroTextContainer}>
                <h2>WE'RE<br />HIRING</h2>
                <p>rockville<br />montreal<br />austin<br />dallas</p>
            </div>
        </Container>
    </div>
}

export default HomeHero;