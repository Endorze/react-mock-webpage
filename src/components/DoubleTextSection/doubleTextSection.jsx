import Container from "../Container/container";
import HorizontalDisplay from "../HorizontalDisplay/horizontalDisplay";
import VerticalDisplay from "../VerticalDisplay/verticalDisplay";
import styles from "./doubleTextSection.module.css"

const DoubleTextSection = () => {
    return (
        <div>
            <Container>
                <div className={styles.horizontal}>
                    <VerticalDisplay>
                        <div className={styles.textSection}>
                            <h3>Our Vision</h3>
                            <h2>Hejhej jag är en text 2</h2>
                        </div>
                    </VerticalDisplay>
                    <VerticalDisplay>
                        <div className={styles.textSection}>
                            <h3>Our Expectations</h3>
                            <h2>Hejhej jag är en text 2</h2>
                        </div>
                    </VerticalDisplay>
                </div>
            </Container>
        </div>
    )
}

export default DoubleTextSection;