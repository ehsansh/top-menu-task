import styles from "./ProductActions.module.scss";
import { Product } from "@/features/products/types";
import { useCartStore } from "@/features/cart/store/useCartStore";

interface ProductItemProps {
    product: Product;
}

export const ProductActions = ({ product }: ProductItemProps) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const quantity = useCartStore(
        (state) =>
            state.items.find((item) => item.id === product.id)?.quantity || 0
    );

    return (
        <div className={styles["product-actions"]}>
            <button className="plus" onClick={() => addToCart(product)}>
                +
            </button>
            {quantity > 0 && (
                <>
                    <span className={styles["product-actions-count"]}>
                        {quantity}
                    </span>

                    <button
                        className="minus"
                        onClick={() => removeFromCart(product.id)}
                    >
                        −
                    </button>
                </>
            )}
        </div>
    );
};
