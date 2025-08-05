import { CartActionTypes } from '../actionTypes/cartActionTypes';
import type {
    AddProductToCartType,
    DeleteProductFromCartByIdType,
    ClearCartType,
    UpdateQuantityType,
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

const updateQuantity = (
    id: number | string,
    quantity: number
): UpdateQuantityType => ({
    type: CartActionTypes.UPDATE_QUANTITY,
    payload: { id, quantity },
});

export const cartActionCreators = {
    addProductToCart,
    deleteProductFromCart,
    clearCart,
    updateQuantity,
};
