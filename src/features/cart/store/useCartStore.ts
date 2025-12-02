import { create } from "zustand";
import { CartItem, Product } from "@/features/products/types";

export interface CartStore {
    items: CartItem[];
    totalCount: number;
    totalPrice: number;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

const calculateTotals = (items: CartItem[]) => {
    const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => {
        const price = item.discountPercentage
            ? Math.floor(
                  item.price - (item.price * item.discountPercentage) / 100
              )
            : item.price;

        return acc + price * item.quantity;
    }, 0);
    return { totalCount, totalPrice };
};

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

            const { totalCount, totalPrice } = calculateTotals(newItems);

            return {
                items: newItems,
                totalCount: totalCount,
                totalPrice: totalPrice,
            };
        }),

    removeFromCart: (id: number) =>
        set((state) => {
            const existingItem = state.items.find((item) => item.id === id);

            if (!existingItem) {
                return state;
            }

            let newItems: CartItem[];

            if (existingItem.quantity > 1) {
                newItems = state.items.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                newItems = state.items.filter((item) => item.id !== id);
            }

            const { totalCount, totalPrice } = calculateTotals(newItems);

            return {
                items: newItems,
                totalCount: totalCount,
                totalPrice: totalPrice,
            };
        }),

    clearCart: () => set({ items: [], totalCount: 0, totalPrice: 0 }),
}));
