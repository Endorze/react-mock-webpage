import styles from "./gridTextImageSection.module.css";
import Container from "../Container/container.jsx";
import VerticalDisplay from "../VerticalDisplay/verticalDisplay.jsx";
import Wrapper from "../Wrapper/wrapper.jsx";
import Button from "../Button/button.jsx";

const GridTextImageSection = ({}) => {
    return (<div>
        <Container>
            <Wrapper>
                <div className={styles.section}>
                    <div className={styles.sectionDiv1}>
                    <h3>Get to know Bethesda</h3>
                    <p>We're more than just an Avarage Gaming Studio</p>
                    </div>
                    <div className={styles.sectionDiv2}>
                        <div className={styles.buttonDiv}>
                            <h2>Eager to know more about us?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi molestias dignissimos exercitationem ipsa iusto nulla aliquam minima explicabo tempore. Veritatis impedit voluptates eum illum reprehenderit quidem sequi qui quia?</p>
                            <Button children={<h2>Meet our Crew</h2>} className={styles.gridButton}/>
                        </div>
                    </div>
                    <div className={styles.sectionDiv3}>
                    <img src="https://cdn1.epicgames.com/spt-assets/541b3ca52c4f423d83fb2411c5e45962/oblivion-thtkx.jpg" />
                    </div>
                    <div className={styles.sectionDiv4}>
                        <h2>Why should you trust us?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis exercitationem similique sequi iusto et debitis repellat. Exercitationem porro maiores eum aliquid, voluptatum incidunt deserunt quis ipsa voluptate sit enim consequatur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quasi cumque sit similique nemo incidunt repudiandae ipsa tempora a, sequi vel pariatur quisquam quibusdam voluptas officia animi ullam quas in.</p>
                    </div>
                </div>
            </Wrapper>
        </Container>
    </div>)
}

export default GridTextImageSection;