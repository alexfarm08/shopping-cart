import styles from "../css-modules/Card.module.css";
import Button from "./Button.jsx";
import { useState } from "react";
import { useOutletContext } from "react-router";

function Card(props) {

    const { addToCart } = useOutletContext();
    const [quant, setQuant] = useState();

    const handleClick = () => {
        addToCart(props.title, props.price, quant);
    }

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} alt="product" src={props.image}/>
            <h3 className={styles.productTitle}>{props.title}</h3>
            <p className={styles.productDescription}>{props.description}</p>
            <p className={styles.productPrice}>price: $ {props.price}</p>
            <div className={styles.input}>
                <div className={styles.inputDiv}>
                    <label className={styles.quantLable} htmlFor="quantity">Quantity:</label>
                    <input className={styles.quantInput} type="number" name="quantity" onChange={(e) => setQuant(Number(e.target.value))} />
                </div>
                <Button className={styles.button} btnText="Add to cart" onClick={handleClick} />
            </div>
        </div>
    )
}

export default Card;