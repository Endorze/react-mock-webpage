import styles from "./horizontalDisplay.module.css"

const HorizontalDisplay = ({children, className}) => {
    return (
        <div className={[styles.horizontal, className].join("")}>
            {children}
        </div>
    )
}

export default HorizontalDisplay;