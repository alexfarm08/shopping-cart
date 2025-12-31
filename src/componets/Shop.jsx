import { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../css-modules/Shop.module.css";

function Shop() {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProduct(data);
            }
            catch(e) {
                console.log(e);
            } 
        }
        fetchData();
    }, []);

    return (
        <div className={styles.shop}>
            <h2 className={styles.shopHeading}>Shop our great fake products</h2>
            <div className={styles.productsDiv}>
                {products && products.length > 0 ? (
                    products.map(product => (
                        <Card className={styles.productsCard} key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} />
                    ))
                ) : (
                    <p className={styles.loading}>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Shop;