import { create } from 'zustand'
import type { Product } from '../Products'

type CartStore = {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (id: string) => void
    reset: () => void
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
    reset: () => set(() => ({ cart: [] })),
}))