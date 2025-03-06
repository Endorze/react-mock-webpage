import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from "/image/whitelogo.png"
import styles from "./PhoneHeader.module.css"
import Container from "../Container/container";

const PhoneHeader = ({ currentPage, setCurrentPage }) => {

    const ref = useRef()    // { current: <element> }
    const [isOpen, setIsOpen] = useState(false);

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

            <img src={logo} />
            <button
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                    transition={{ duration: 0.1 }}
                />
                <motion.span
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.1 }}
                />
                <motion.span
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                    transition={{ duration: 0.1 }}
                />
            </button>
            {isOpen && (
                <div className={styles.mobileMenu}>
                    <a onClick={() => setCurrentPage("home")}>Home</a>
                    <a onClick={() => setCurrentPage("about")}>About</a>
                    <a onClick={() => setCurrentPage("contact")}>Contact</a>
                    <a onClick={() => setCurrentPage("overview")}>Overview</a>
                </div>
            )}
    </div>)
}

export default PhoneHeader;