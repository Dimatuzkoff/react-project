import type { Reducer } from 'redux';
import type { CartStateType } from '../types/cartTypes';
import type { CartActions } from '../types/cartAction';
import { CartActionTypes } from '../actionTypes/cartActionTypes';
import {loadCartState} from '@/entities/cart/libs/helpers/loadCartState ';
import {saveCartState} from '@/entities/cart/libs/helpers/saveCartState';
const initialState: CartStateType = {
    cart: loadCartState() || [],
};

export const cartReducer: Reducer<CartStateType, CartActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
       
        case CartActionTypes.ADD_TO_CART: {
            const updatedCart = [...state.cart, { ...action.payload }];
            saveCartState(updatedCart);
            return {
                ...state,
                cart: updatedCart,
            };
        }
        case CartActionTypes.REMOVE_FROM_CART: {
            const updatedCart = state.cart.filter(product => product.id !== action.payload);
            saveCartState(updatedCart);
            return {
                ...state,
                cart: updatedCart,
            };
        }
        case CartActionTypes.CLEAR_CART: {
             saveCartState([]);
            return {
                ...state,
                cart: [],
            };
        }
        default: {
            return state;
        }
    }
};
