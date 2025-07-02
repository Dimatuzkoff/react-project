import { type Product } from '@/entities/product/model/types/product';

export const saveCartState = (state: Product[]) => {
    const cartState = JSON.stringify(state)
    localStorage.setItem('cart_state', cartState)
}