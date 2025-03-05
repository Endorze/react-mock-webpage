import Container from "../Container/container";
import Wrapper from "../Wrapper/wrapper";
import styles from "./videoSection.module.css"

const VideoSection = ({videoLink, title1, title2, description1, description2}) => {
    return (
        <div className={styles.background} id="trailer">
        <Container>
            <Wrapper>
                <div className={styles.section}>
                    <div className={styles.div1}>
                        <iframe width="100%" height="100%" src={`${videoLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className={styles.div2}>
                        <h2>{title1}</h2>
                        <p>{description1}</p>
                    </div>
                    <div className={styles.div3}>
                    <h2>{title2}</h2>
                    <p>{description2}</p>
                    </div>
                </div>
            </Wrapper>
        </Container>
        </div>
    )
}

export default VideoSection;