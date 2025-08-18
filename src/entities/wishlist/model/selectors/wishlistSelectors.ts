import type { StateSchema } from '@/app/config/store/stateSchema';

export const getWishlistState = (state: StateSchema) => state.wishlist;

export const getWishlistStateItemsIds = (state: StateSchema) => {
    return state.wishlist.wishlist.map((item) => item.id) || [];
}

export const makeIsProductInWishlist = (productId: number) => {
    return (state: StateSchema) => getWishlistStateItemsIds(state).includes(productId);
};
