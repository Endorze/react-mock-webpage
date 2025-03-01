import styles from "./verticalDisplay.module.css"

const VerticalDisplay = ({children}) => {
    return (
        <div className={styles.vertical}>
            {children}
        </div>
    )
}

export default VerticalDisplay;