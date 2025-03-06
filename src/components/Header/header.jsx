import Container from "../Container/container.jsx"
import logo from "/image/whitelogo.png"
import styles from "./header.module.css"
import { useEffect, useRef } from "react";

const Header = ({
    currentPage,
    setCurrentPage
}) => {

    const ref = useRef()    // { current: <element> }

    useEffect(() => {

        const listener = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                if (ref.current) {
                    ref.current.classList.add(styles['scroll-header']);
                }
            } else {
                if (ref.current) {
                    ref.current.classList.remove(styles['scroll-header']);
                }
            }
        }

        window.addEventListener('scroll', listener)

        return () => {
            window.removeEventListener('scroll', listener)
        }
    }, [])


    return (<div ref={ref} className={styles.header}>
        <Container className={styles.headerContainer}>
            <img src={logo} />
            <div className={styles.navWrap}>
                <a className={styles.highlight} onClick={() => setCurrentPage("home")}>Home</a>
                <a onClick={() => setCurrentPage("about")}>About</a>
                <a onClick={() => setCurrentPage("contact")}>Contact</a>
                <a onClick={() => setCurrentPage("overview")}>Overview</a>
            </div>
        </Container>
    </div>)
}

export default Header;