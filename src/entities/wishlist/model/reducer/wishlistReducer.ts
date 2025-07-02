import type { Reducer } from 'redux';
import type { WishlistStateType } from '../types/wishlistTypes';
import type { WishlistActions } from '../types/wishlistAction';
import { WishlistActionTypes } from '../actionTypes/wishlistActionTypes';
import {loadWishlistState} from '@/entities/wishlist/libs/helpers/loadWishlistState ';
import {saveWishlistState} from "@/entities/wishlist/libs/helpers/saveWishlistState";
const initialState: WishlistStateType = {
    wishlist: loadWishlistState() || [],
};

export const wishlistReducer: Reducer<WishlistStateType, WishlistActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case WishlistActionTypes.ADD_TO_WISHLIST: {
            const updatedWishlist = [...state.wishlist, { ...action.payload }];
            saveWishlistState(updatedWishlist);
            return {
                ...state,
                wishlist: updatedWishlist,
            };
        }
        case WishlistActionTypes.REMOVE_FROM_WISHLIST: {
            const updatedWishlist = state.wishlist.filter(product => product.id !== action.payload);
            saveWishlistState(updatedWishlist);
            return {
                ...state,
                wishlist: updatedWishlist,
            };
        }
        case WishlistActionTypes.CLEAR_WISHLIST: {
            saveWishlistState([]);
            return {
                ...state,
                wishlist: [],
            };
        }
        default: {
            return state;
        }
    }
};
