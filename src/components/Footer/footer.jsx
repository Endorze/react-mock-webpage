import Container from "../Container/container";
import HorizontalDisplay from "../HorizontalDisplay/horizontalDisplay";
import VerticalDisplay from "../VerticalDisplay/verticalDisplay";
import Wrapper from "../Wrapper/wrapper";
import styles from "./footer.module.css"

const Footer = () => {
    return <div className={styles.footerWrapper}>
            <Container>
                <Wrapper>
                    <div className={styles.footerPadding}>
                        <h2 className={styles.contactTitle}>Contact</h2>
                        <HorizontalDisplay>
                            <VerticalDisplay>
                                <h2 className={styles.subheading}>General Info</h2>
                                <p>BETHESDA SOFTWORKS LLC</p>
                                <p>1370 Piccard Drive</p>
                                <p>Rockville, MD 20850</p>
                                <p>(301) 926-8300</p>
                                <a href="mailto:info@bethsoft.com">info@bethsoft.com</a>
                            </VerticalDisplay>
                            <VerticalDisplay>
                                <div>     
                                    <h2 className={styles.subheading}>Technical Support</h2>
                                    <a href="mailto:help.bethesda.net">help.bethesda.net</a>
                                </div>
                                <div>
                                    <h2 className={styles.subheading}>Press Inquiries</h2>
                                    <a href="mailto:press@bethesda.com">press@bethesda.com</a>
                                </div>
                            </VerticalDisplay>
                            <VerticalDisplay>
                                <h2 className={styles.subheading}>Follow Us</h2>
                                <HorizontalDisplay>
                                    <div className={styles.linkWrap}>
                                        <a className={`${styles.contactSocialLink} ${styles.facebook}`}>Bethesda Facebook</a>
                                        <a className={`${styles.contactSocialLink} ${styles.twitter}`}>Bethesda Twitter</a>
                                    </div>
                                </HorizontalDisplay>
                            </VerticalDisplay>
                        </HorizontalDisplay>
                    </div>
                        <div className={styles.footerContent}>
                            <div className={styles.footerLinks}>
                                <a className={styles.footerLink}>terms of service</a>
                                <span>•</span>
                                <a className={styles.footerLink}>privacy policy</a>
                                <span>•</span>
                                <a className={styles.footerLink}>legal information</a>
                                <span>•</span>
                                <a className={styles.footerLink}>code of conduct</a>
                                <span>•</span>
                                <a className={styles.footerLink}>cookie policy</a>
                                <span>•</span>
                                <a className={styles.footerLink}>contact</a>
                            </div>
                            <div>
                            <p>© 2025 <a href="https://bethesda.net/">Bethesda Softworks LLC</a>, a <a href="https://www.zenimax.com/">Zenimax Media</a> Company. Trademarks belong to their respective owners. All rights reserved.</p>
                            </div>
                        </div>
                </Wrapper>
            </Container>
    </div>
}

export default Footer;