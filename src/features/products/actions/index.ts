"use server";

export async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products", {
            cache: "force-cache",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching products: ${error}`);
    }
}
