import styles from "../css-modules/Button.module.css";

function Button(props) {
    return(
        <button className={props.styles} onClick={props.onClick}>{props.btnText}</button>
    )
}

export default Button;