import { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../css-modules/Home.module.css";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
            }
            catch(e) {
                console.log(e);
            }
        }

        fetchData();
    }, []);

    const mainImg = products[0]?.image;

    return (
        <div className={styles.homePage}>
            <div className={styles.imgDiv}>
                {products && products.length > 0 ? (
                    <img className={styles.mainImg} src={mainImg} alt="product" />
                ) : (
                    <p className={styles.mainImgLoading}>Loading...</p>
                )}
            </div>
            <div className={styles.featuredSection}>
                <h2 className={styles.featuredTitle}>Featured</h2>
                <div className={styles.cards}>
                    {products && products.length > 0 ? (
                        products.slice(1,4).map(product => (
                            <Card key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} />
                        ))
                    ) : (
                        <p className={styles.productsLoading}>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;