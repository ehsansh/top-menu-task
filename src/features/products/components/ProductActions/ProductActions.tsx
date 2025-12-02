import styles from "./ProductActions.module.scss";

export const ProductActions = () => {
    return (
        <div className={styles["product-actions"]}>
            <button className="plus">+</button>
            <span className={styles["product-actions-count"]}>2</span>
            <button className="minus">−</button>
        </div>
    );
};
