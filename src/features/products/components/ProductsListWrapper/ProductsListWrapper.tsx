import { ProductsList } from "../ProductsList/ProductsList";
import {
    QueryClient,
    dehydrate,
    HydrationBoundary,
} from "@tanstack/react-query";
import { fetchProducts } from "@/features/products/actions";

export async function ProductsListWrapper() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ProductsList />
        </HydrationBoundary>
    );
}
