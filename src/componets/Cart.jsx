import { useOutletContext } from "react-router";
import CartCard from "./CartCard.jsx";
import styles from "../css-modules/Cart.module.css";

function Cart() {

    const { cart } = useOutletContext();

    return (
        <div className={styles.cartPage}>
            <h2 className={styles.cartHeading}>Check Out</h2>
            {cart.length === 0 ? (
                <p className={styles.emptyCart}>Your cart is empty</p>
            ) : (
                <div className={styles.cartItems}>
                    {cart.map(item => (
                        <CartCard key={item.title} img={item.img} title={item.title} price={item.price} quant={item.quant} description={item.description} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Cart;