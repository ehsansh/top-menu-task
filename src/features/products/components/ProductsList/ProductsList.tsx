"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/features/products/actions";
import { Product } from "@/shared/types";
import { ProductItem } from "../ProductItem/ProductItem";
import styles from "./ProductsList.module.scss";

export function ProductsList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className={styles["products-list"]}>
            {data?.products?.map((product: Product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}
