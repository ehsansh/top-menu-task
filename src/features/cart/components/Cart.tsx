"use client";
import styles from "./Cart.module.scss";
import { useCartStore } from "@/features/cart/store/useCartStore";

export default function Cart() {
    const totalCount = useCartStore((state) => state.totalCount);
    const totalPrice = useCartStore((state) => state.totalPrice);

    if (totalCount === 0) return null;

    return (
        <div className={styles.cart}>
            <div className={styles.cart__inner}>
                <span className={styles.cart__count}>{totalCount}</span>
                <span className={styles.cart__text}>تکمیل خرید</span>
                <span className={styles.cart__price}>
                    {totalPrice.toLocaleString("fa-IR")} تومان
                </span>
            </div>
        </div>
    );
}
