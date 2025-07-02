import { type Product } from '@/entities/product/model/types/product';

export const saveWishlistState = (state: Product[]) => {
    const wishlistState = JSON.stringify(state)
    localStorage.setItem('wishlist_state', wishlistState)
}