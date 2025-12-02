import styles from "./ProductItem.module.scss";
import { Product } from "@/features/products/types";
import Image from "next/image";

interface ProductItemProps {
    product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
    const { title, description, price, discountPercentage, thumbnail } =
        product;
    const finalPrice = discountPercentage
        ? Math.floor(price - (price * discountPercentage) / 100)
        : price;

    return (
        <div className={styles["product-card"]}>
            {discountPercentage && (
                <div className={styles["product-card__discount"]}>
                    <span className={styles["product-card__discount-percent"]}>
                        %{Math.floor(discountPercentage)}
                    </span>
                    <span className={styles["product-card__discount-text"]}>
                        تخفیف
                    </span>
                </div>
            )}
            <div>
                <Image
                    src={thumbnail}
                    alt={title}
                    className={styles["product-card__thumbnail"]}
                    width={240}
                    height={240}
                />
                <div className={styles["product-card__actions"]}>
                    <button className="plus">+</button>
                    <span className={styles["product-card__actions-count"]}>
                        2
                    </span>
                    <button className="minus">−</button>
                </div>
            </div>

            <div className={styles["product-card__content"]}>
                <h2 className={styles["product-card__title"]}>{title}</h2>

                <p className={styles["product-card__description"]}>
                    {description}
                </p>

                <div className={styles["product-card__prices"]}>
                    {discountPercentage && (
                        <p className={styles["product-card__old-price"]}>
                            {price}
                            تومان
                        </p>
                    )}
                    <p className={styles["product-card__new-price"]}>
                        {finalPrice} تومان
                    </p>
                </div>
            </div>
        </div>
    );
};
