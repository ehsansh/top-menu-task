"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/features/products/actions";
import { Product } from "@/features/products/types";

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
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
}
