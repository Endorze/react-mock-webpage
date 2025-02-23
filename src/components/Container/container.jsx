
import styles from "./container.module.css";

const Container = ({ className, children }) => (<div className={[styles.container, className].join(" ")}>{children}</div>)

export default Container