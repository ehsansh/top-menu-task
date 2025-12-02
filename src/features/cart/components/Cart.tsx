import styles from "./Cart.module.scss";

export default function Cart() {
    return (
        <div className={styles.cart}>
            <div className={styles.cart__inner}>
                <span className={styles.cart__count}>۲</span>
                <span className={styles.cart__text}>تکمیل خرید</span>
                <span className={styles.cart__price}> 1,355,750 تومان</span>
            </div>
        </div>
    );
}
