import styles from "../css-modules/Button.module.css";

function Button(props) {
    return(
        <button className={styles.addToCart}>{props.btnText}</button>
    )
}

export default Button;