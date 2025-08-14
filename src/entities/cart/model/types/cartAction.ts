import { CartActionTypes } from '../actionTypes/cartActionTypes';
import { type CartProduct } from '@/entities/cart/model/types/cartProduct';

export type AddProductToCartType = {
    type: CartActionTypes.ADD_TO_CART;
    payload: CartProduct;
};

export type DeleteProductFromCartByIdType = {
    type: CartActionTypes.REMOVE_FROM_CART;
    payload: CartProduct['id'];
};

export type ClearCartType = {
    type: CartActionTypes.CLEAR_CART;
};

export type UpdateQuantityType = {
    type: CartActionTypes.UPDATE_QUANTITY;
    payload: {
        id: CartProduct['id'];
        quantity: CartProduct['quantity'];
    };
};

export type CartActions =
    | AddProductToCartType
    | DeleteProductFromCartByIdType
    | ClearCartType
    | UpdateQuantityType;
