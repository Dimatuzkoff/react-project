import type { CartStateType } from '@/features/cart/model/types/cartTypes';
import type { WishlistStateType } from '@/features/wishlist/model/types/wishlistTypes';

export type StateSchema = {
    cart: CartStateType;
    wishlist: WishlistStateType;
};
