import styles from "../css-modules/Card.module.css"

function Card(props) {


    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} alt="product" src={props.image}/>
            <h3 className={styles.productTitle}>{props.title}</h3>
            <p className={styles.productDescription}>{props.description}</p>
            <p className={styles.productPrice}>price: $ {props.price}</p>
        </div>
    )
}

export default Card;