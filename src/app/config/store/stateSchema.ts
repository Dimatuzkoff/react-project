import type { CartStateType } from '@/entities/cart/model/types/cartTypes';
import type { WishlistStateType } from '@/entities/wishlist/model/types/wishlistTypes';

export type StateSchema = {
    cart: CartStateType;
    wishlist: WishlistStateType;
};
