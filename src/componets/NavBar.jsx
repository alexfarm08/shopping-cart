import { Link } from "react-router";
import styles from "../css-modules/NavBar.module.css";

function NavBar({ cart }) {
    const totalItems = cart.reduce((sum, item) => sum + item.quant, 0);

    return (
        <div className={styles.navBar}>
            <h1 className={styles.navTitle}>Shop Fake</h1>
            <div className={styles.navLinks}>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="shop">Shop</Link>
                <Link className={styles.link} to="cart">Cart {totalItems > 0 ? `(${totalItems})` : ''}</Link>
            </div>
        </div>
    )
}

export default NavBar;