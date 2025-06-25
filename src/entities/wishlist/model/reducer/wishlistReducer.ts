import type { Reducer } from 'redux';
import type { WishlistStateType } from '../types/wishlistTypes';
import type { WishlistActions } from '../types/wishlistAction';
import { WishlistActionTypes } from '../actionTypes/wishlistActionTypes';

const initialState: WishlistStateType = {
    wishlist: [],
};

export const wishlistReducer: Reducer<WishlistStateType, WishlistActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case WishlistActionTypes.ADD_TO_WISHLIST: {
            return {
                ...state,
                wishlist: [...state.wishlist, { ...action.payload }],
            };
        }
        case WishlistActionTypes.REMOVE_FROM_WISHLIST: {
            return {
                ...state,
                wishlist: state.wishlist.filter(
                    product => product.id !== action.payload
                ),
            };
        }
        case WishlistActionTypes.CLEAR_WISHLIST: {
            return {
                ...state,
                wishlist: initialState.wishlist,
            };
        }
        default: {
            return state;
        }
    }
};
