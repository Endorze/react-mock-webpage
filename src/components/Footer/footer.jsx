import Container from "../Container/container";
import HorizontalDisplay from "../HorizontalDisplay/horizontalDisplay";
import VerticalDisplay from "../VerticalDisplay/verticalDisplay";
import Wrapper from "../Wrapper/wrapper";
import styles from "./footer.module.css"

const Footer = () => {
    return <div>
            <Container>
                <Wrapper>
                    <h2 className={styles.contactTitle}>Contact</h2>
                    <HorizontalDisplay>
                        <VerticalDisplay>
                            <h2>General Info</h2>
                            <p>BETHESDA SOFTWORKS LLC</p>
                            <p>1370 Piccard Drive</p>
                            <p>Rockville, MD 20850</p>
                            <p>(301) 926-8300</p>
                            <a href="mailto:info@bethsoft.com">info@bethsoft.com</a>
                        </VerticalDisplay>
                        <VerticalDisplay>
                            <div>     
                                <h2>Technical Support</h2>
                                <a href="mailto:help.bethesda.net">help.bethesda.net</a>
                            </div>
                            <div>
                                <h2>Press Inquiries</h2>
                                <a href="mailto:press@bethesda.com">press@bethesda.com</a>
                            </div>
                        </VerticalDisplay>
                        <VerticalDisplay>
                            <h2>Follow Us</h2>
                            <HorizontalDisplay>
                            <a><img src="" />Bethesda Facebook</a>
                            <a><img src="" />Bethesda Facebook</a>
                            </HorizontalDisplay>
                        </VerticalDisplay>
                    </HorizontalDisplay>
                </Wrapper>
            </Container>
    </div>
}

export default Footer;