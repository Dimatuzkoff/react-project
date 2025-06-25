import { WishlistActionTypes } from '../actionTypes/wishlistActionTypes';
import type {
    AddProductToWishlistType,
    DeleteProductFromWishlistByIdType,
    ClearWishlistType,
} from '../types/wishlistAction';

const addProductToWishlist = (
    payload: AddProductToWishlistType['payload']
): AddProductToWishlistType => {
    return {
        type: WishlistActionTypes.ADD_TO_WISHLIST,
        payload: payload,
    };
};

const deleteProductFromWishlist = (
    payload: DeleteProductFromWishlistByIdType['payload']
): DeleteProductFromWishlistByIdType => {
    return {
        type: WishlistActionTypes.REMOVE_FROM_WISHLIST,
        payload: payload,
    };
};

const clearWishlist = (): ClearWishlistType => {
    return {
        type: WishlistActionTypes.CLEAR_WISHLIST,
    };
};

export const cartActionCreators = {
    addProductToWishlist,
    deleteProductFromWishlist,
    clearWishlist,
};
