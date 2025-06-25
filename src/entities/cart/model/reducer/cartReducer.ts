import type { Reducer } from 'redux';
import type { CartStateType } from '../types/cartTypes';
import type { CartActions } from '../types/cartAction';
import { CartActionTypes } from '../actionTypes/cartActionTypes';

const initialState: CartStateType = {
    cart: [],
};

export const cartReducer: Reducer<CartStateType, CartActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, { ...action.payload }],
            };
        }
        case CartActionTypes.REMOVE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(
                    product => product.id !== action.payload
                ),
            };
        }
        case CartActionTypes.CLEAR_CART: {
            return {
                ...state,
                cart: initialState.cart,
            };
        }
        default: {
            return state;
        }
    }
};
