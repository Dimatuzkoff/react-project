import type { Reducer } from 'redux';
import type { CartStateType } from '../types/cartTypes';
import type { CartActions } from '../types/cartAction';
import { CartActionTypes } from '../actionTypes/cartActionTypes';

const initialState: CartStateType = {
    cart: [],
};

export const cartReducer: Reducer<CartStateType, CartActions> = (
    state = initialState,
    action: CartActions
): CartStateType => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART: {
            const existingItem = state.cart.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? {
                                  ...item,
                                  quantity:
                                      item.quantity +
                                      (action.payload.quantity || 1),
                              }
                            : item
                    ),
                };
            }

            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        price: action.payload.price,
                        thumbnail: action.payload.thumbnail,
                        quantity: action.payload.quantity || 1,
                    },
                ],
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
        case CartActionTypes.UPDATE_QUANTITY: {
            return {
                ...state,
                cart: state.cart.map(item =>
                    String(item.id) === String(action.payload.id)
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        }
        default: {
            return state;
        }
    }
};
