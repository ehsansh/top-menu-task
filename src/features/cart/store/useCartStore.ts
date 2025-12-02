import { create } from "zustand";
import { CartItem, Product } from "@/features/products/types";

export interface CartStore {
    items: CartItem[];
    totalCount: number;
    totalPrice: number;
    addToCart?: (product: Product) => void;
    removeFromCart?: (id: number) => void;
    clearCart?: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
    items: [],
    totalCount: 0,
    totalPrice: 0,
    addToCart: (product: Product) =>
        set((state) => {
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === product.id
            );

            let newItems: CartItem[];

            if (existingItemIndex > -1) {
                newItems = state.items.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                const newItem: CartItem = {
                    ...product,
                    quantity: 1,
                };
                newItems = [...state.items, newItem];
            }

            const newTotalCount = newItems.reduce(
                (acc, item) => acc + item.quantity,
                0
            );

            const newTotalPrice = newItems.reduce((acc, item) => {
                const price =
                    item.price * (1 - (item.discountPercentage || 0) / 100);
                return acc + price * item.quantity;
            }, 0);
            return {
                items: newItems,
                totalCount: newTotalCount,
                totalPrice: newTotalPrice,
            };
        }),
}));
