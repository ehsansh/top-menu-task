"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/features/products/actions";
import { Product } from "@/features/products/types";
import { ProductItem } from "./ProductItem";

export function ProductsList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data?.products?.map((product: Product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}
