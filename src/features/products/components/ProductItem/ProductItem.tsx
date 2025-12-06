import styles from "./ProductItem.module.scss";
import { Product } from "@/shared/types";
import Image from "next/image";
import { ProductActions } from "@/features/products/components/ProductActions/ProductActions";
import { ProductSlideshow } from "@/features/products/components/ProductSlideshow/ProductSlideshow";
import { Activity } from "react";

interface ProductItemProps {
    product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
    const { title, description, price, discountPercentage, thumbnail, images } =
        product;
    const finalPrice = discountPercentage
        ? Math.floor(price - (price * discountPercentage) / 100)
        : price;

    const hasDiscount =
        discountPercentage && Math.floor(discountPercentage) > 0;

    return (
        <div className={styles["product-card"]}>
            <Activity mode={hasDiscount ? "visible" : "hidden"}>
                <div className={styles["product-card__discount"]}>
                    <span className={styles["product-card__discount-percent"]}>
                        %
                        {Math.floor(discountPercentage!).toLocaleString(
                            "fa-IR"
                        )}
                    </span>
                    <span className={styles["product-card__discount-text"]}>
                        تخفیف
                    </span>
                </div>
            </Activity>
            <Activity mode={images.length > 1 ? "visible" : "hidden"}>
                <div className={styles["product-card__slider-wrapper"]}>
                    <ProductSlideshow
                        productImages={images}
                        productTitle={title}
                    />
                </div>
            </Activity>

            <div className={styles["product-card__content-row"]}>
                <div className={styles["product-card__thumbnail-wrap"]}>
                    <Image
                        src={thumbnail}
                        alt={title}
                        className={styles["product-card__thumbnail"]}
                        width={240}
                        height={240}
                    />
                    <ProductActions product={product} />
                </div>
                <div className={styles["product-card__content"]}>
                    <h2 className={styles["product-card__title"]}>{title}</h2>

                    <p className={styles["product-card__description"]}>
                        {description.substring(0, 60)}
                        ...
                    </p>

                    <div className={styles["product-card__prices"]}>
                        <Activity mode={hasDiscount ? "visible" : "hidden"}>
                            <p className={styles["product-card__old-price"]}>
                                {Math.floor(price).toLocaleString("fa-IR")}
                                تومان
                            </p>
                        </Activity>

                        <p className={styles["product-card__new-price"]}>
                            {finalPrice.toLocaleString("fa-IR")} تومان
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
