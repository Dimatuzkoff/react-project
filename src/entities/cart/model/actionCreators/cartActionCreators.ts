import { CartActionTypes } from '../actionTypes/cartActionTypes';
import type {
    AddProductToCartType,
    DeleteProductFromCartByIdType,
    ClearCartType,
} from '../types/cartAction';

const addProductToCart = (
    payload: AddProductToCartType['payload']
): AddProductToCartType => {
    return {
        type: CartActionTypes.ADD_TO_CART,
        payload: payload,
    };
};

const deleteProductFromCart = (
    payload: DeleteProductFromCartByIdType['payload']
): DeleteProductFromCartByIdType => {
    return {
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: payload,
    };
};

const clearCart = (): ClearCartType => {
    return {
        type: CartActionTypes.CLEAR_CART,
    };
};

export const cartActionCreators = {
    addProductToCart,
    deleteProductFromCart,
    clearCart,
};
