import { CartActionTypes } from '../actionTypes/cartActionTypes';
import type {
    AddProductToCartType,
    DeleteProductFromCartByIdType,
    ClearCartType,
    UpdateQuantityType,
    AddPromocodeType,
    RemovePromocodeType
} from '../types/cartAction';
import type { CartProduct } from '../types/cartProduct';

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

const addPromocode = (
    payload: AddPromocodeType['payload']
): AddPromocodeType => {
    return {
        type: CartActionTypes.ADD_PROMOCODE,
        payload: payload,
    }
}

const deletePromocode = (): RemovePromocodeType => {
    return {
        type: CartActionTypes.REMOVE_PROMOCODE
    }
}

const updateQuantity = (
    id: CartProduct['id'],
    quantity: CartProduct['quantity']
): UpdateQuantityType => ({
    type: CartActionTypes.UPDATE_QUANTITY,
    payload: { id, quantity },
});

export const cartActionCreators = {
    addProductToCart,
    deleteProductFromCart,
    clearCart,
    updateQuantity,
    addPromocode,
    deletePromocode
};
