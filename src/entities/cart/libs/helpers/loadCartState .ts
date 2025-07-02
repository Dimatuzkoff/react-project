import { type Product } from '@/entities/product/model/types/product';

export const loadCartState = (): Product[] => {
    const cartState = localStorage.getItem('cart_state');
    return cartState ? JSON.parse(cartState) : []
}