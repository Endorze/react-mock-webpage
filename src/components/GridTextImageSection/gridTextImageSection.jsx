import styles from "./gridTextImageSection.module.css";
import Container from "../Container/container.jsx";
import Wrapper from "../Wrapper/wrapper.jsx";

const GridTextImageSection = ({title1, title2, title3, title4, description1, description2, imagePath, buttonText, buttonIdNav}) => {
    return (<div>
        <Container>
            <Wrapper>
                <div className={styles.section}>
                    <div className={styles.sectionDiv1}>
                    <h3>{title1}</h3>
                    <p>{title2}</p>
                    </div>
                    <div className={styles.sectionDiv2}>
                        <div className={styles.buttonDiv}>
                            <h2>{title3}</h2>
                            <p>{description1}</p>
                            <a href={`${buttonIdNav}`} className={styles.gridButton}><h2>{buttonText}</h2></a>
                        </div>
                    </div>
                    <div className={styles.sectionDiv3}>
                    <img src={`${imagePath}`} />
                    </div>
                    <div className={styles.sectionDiv4}>
                        <h2>{title4}</h2>
                        <p>{description2}</p>
                    </div>
                </div>
            </Wrapper>
        </Container>
    </div>)
}

export default GridTextImageSection;