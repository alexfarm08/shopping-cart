import Button from "./Button.jsx";
import { useOutletContext } from "react-router";
import stylesButton from "../css-modules/RemoveButton.module.css";
import styles from "../css-modules/CartCard.module.css";

function CartCard(props) {

    const { removeCartItem } = useOutletContext();

    const handleClick = () => {
        removeCartItem(props.title);
    }

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} alt="Product Image" src={props.img} />
            <h3 className={styles.productTitle}>{props.title}</h3>
            <p className={styles.productDescription}>{props.description}</p>
            <p className={styles.productPrice}>Price: $ {props.price}</p>
            <p className={styles.quant}>Quantity: {props.quant}</p>
            <Button styles={stylesButton.button} className={styles.removeButton} btnText="Remove" onClick={handleClick} />
        </div>
    )
}

export default CartCard;