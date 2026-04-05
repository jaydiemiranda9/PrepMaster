"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, CartProduct } from "@/types/product";

interface CartState {
  items: CartItem[];
  addItem: (product: CartProduct) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
  hasItem: (id: string) => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const existing = get().items.find((item) => item.id === product.id);
        if (existing) return; // digital products: no duplicates
        set((state) => ({
          items: [...state.items, { ...product, quantity: 1 }],
        }));
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalItems: () => get().items.length,

      totalPrice: () =>
        get().items.reduce((sum, item) => sum + item.price, 0),

      hasItem: (id) => get().items.some((item) => item.id === id),
    }),
    {
      name: "prepmaster-cart",
    }
  )
);
