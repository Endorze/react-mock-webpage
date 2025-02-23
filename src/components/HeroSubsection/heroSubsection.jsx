import Container from "../Container/container"
import styles from "./heroSubsection.module.css"
import "/fonts/font-sans.ttf"

const HeroSubsection = () => {
    return (
        <div className={styles.subsection}>
            <Container className={styles["horizontal"]}>
                <div className={styles.subsectionContent}>
                    <h1>Join Bethesda Game Studios - Let's Build Worlds</h1>
                    <p>
                        Come join <strong>Bethesda Game Studios</strong>, the award-winning development team behind <strong>The Elder Scrolls</strong>, <strong>Fallout</strong> and <strong>Starfield</strong>, Bethesda Game Studios values its employees and their contributions to creating world-class entertainment properties. We prioritize a healthy home and work life balance by providing competitive salaries, a generous benefits program, a flexible work-from-home policy and offices located in some of North America's best cities. With a goal of creating a culture as fun and diverse as our games and our players, we welcome applicants with unique skillsets, experience levels and backgrounds. If you are passionate about making a meaningful contribution to some of the most significant games in the industry we'd love to hear from you.
                    </p>
                </div>
                <div className={styles.subsectionVideo}>
                    <video width="100%" controls poster="https://cdnstatic.bethsoft.com/bethesdagamestudios.com/Starfield_TheEndlessPursuit_ForWeb.png">
                        <source src="https://cdnstatic.bethsoft.com/bethesdagamestudios.com/Starfield_TheEndlessPursuit_ForWeb.mp4" type="video/mp4" />
                        <source src="https://cdnstatic.bethsoft.com/bethesdagamestudios.com/Starfield_TheEndlessPursuit_ForWeb.webm" type="video/webm" />
                        Your browser does not support HTML video.
                    </video>
                </div>
            </Container>
        </div>
    )
}

export default HeroSubsection;