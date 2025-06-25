import { CartActionTypes } from '../actionTypes/cartActionTypes';
import { type Product } from '@/entities/product/model/types';

export type AddProductToCartType = {
    type: CartActionTypes.ADD_TO_CART;
    payload: Product;
};

export type DeleteProductFromCartByIdType = {
    type: CartActionTypes.REMOVE_FROM_CART;
    payload: number;
};

export type ClearCartType = {
    type: CartActionTypes.CLEAR_CART;
};

export type CartActions =
    | AddProductToCartType
    | DeleteProductFromCartByIdType
    | ClearCartType;
