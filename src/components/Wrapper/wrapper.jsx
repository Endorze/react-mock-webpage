import styles from "./wrapper.module.css"

const Wrapper = ({className, children}) => {
    return (
        <div className={[styles.wrapper, className].join(" ")}>{children}</div>
    )
}

export default Wrapper;