import { type Product } from '@/entities/product/model/types/product';

export const loadWishlistState = (): Product[] => {
    const wishlistState = localStorage.getItem('wishlist_state');
    return wishlistState ? JSON.parse(wishlistState) : []
}