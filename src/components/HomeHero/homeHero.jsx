import styles from "./homeHero.module.css"
import Container from "../Container/container.jsx"

const HomeHero = () => {
    return <div className={styles.hero}>
        <Container className={styles.heroContainer}>
            <div className={styles.heroTextContainer}>
                <h2>WE'RE<br />HIRING</h2>
                <p>THIS IS<br />A FANMADE<br />WEBSITE<br />Built by Alexander Hallgren</p>
            </div>
        </Container>
    </div>
}

export default HomeHero;