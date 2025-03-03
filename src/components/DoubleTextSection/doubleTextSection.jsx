import Container from "../Container/container";
import HorizontalDisplay from "../HorizontalDisplay/horizontalDisplay";
import VerticalDisplay from "../VerticalDisplay/verticalDisplay";
import Wrapper from "../Wrapper/wrapper";
import styles from "./doubleTextSection.module.css"

const DoubleTextSection = () => {
    return (
        <div>
            <Container>
                <Wrapper>

                    <div className={styles.horizontal}>
                        <VerticalDisplay>
                            <div className={styles.textSection}>
                                <h3>Our Vision</h3>
                                <h2>Our Goals for this Century</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis nostrum quod, voluptatibus sed recusandae explicabo neque ipsum reiciendis, excepturi quidem, repudiandae quaerat ad repellendus saepe? Tenetur laborum quam nisi?</p>
                            </div>
                        </VerticalDisplay>
                        <VerticalDisplay>
                            <div className={styles.textSection}>
                                <h3>Our Expectations</h3>
                                <h2>This is how we will succeed</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet, placeat soluta ea recusandae voluptates atque iure ipsa deleniti adipisci quod vel ducimus beatae quaerat ullam enim? Facere, voluptas quaerat.</p>
                            </div>
                        </VerticalDisplay>
                    </div>
                </Wrapper>
            </Container>
        </div>
    )
}

export default DoubleTextSection;