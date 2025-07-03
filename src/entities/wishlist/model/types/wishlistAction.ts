import { WishlistActionTypes } from '../actionTypes/wishlistActionTypes';
import { type Product } from '@/entities/product/model/types/product';

export type AddProductToWishlistType = {
    type: WishlistActionTypes.ADD_TO_WISHLIST;
    payload: Product;
};

export type DeleteProductFromWishlistByIdType = {
    type: WishlistActionTypes.REMOVE_FROM_WISHLIST;
    payload: number;
};

export type ClearWishlistType = {
    type: WishlistActionTypes.CLEAR_WISHLIST;
};

export type WishlistActions =
    | AddProductToWishlistType
    | DeleteProductFromWishlistByIdType
    | ClearWishlistType;
