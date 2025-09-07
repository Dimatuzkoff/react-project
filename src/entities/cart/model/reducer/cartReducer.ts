import type { Reducer } from 'redux';
import type { CartStateType } from '../types/cartTypes';
import type { CartActions } from '../types/cartAction';
import { CartActionTypes } from '../actionTypes/cartActionTypes';

const initialState: CartStateType = {
    cart: [],
    promocode: null,
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
            const appliedDiscount = state.promocode && (state.promocode.type === 'ALL' || (state.promocode.type === 'CATEGORY' && state.promocode.categories.includes(action.payload.category))) ? state.promocode.discount : 0;
            if (existingItem) {
        return {
            ...state,
            cart: state.cart.map(item =>
            item.id === action.payload.id ? {
                  ...item,
                  quantity: item.quantity + (action.payload.quantity || 1),
                  promocodeDiscount: appliedDiscount,
                }
              : item
          ),
        };
      } else
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id: action.payload.id,
              title: action.payload.title,
              price: action.payload.price,
              category: action.payload.category,
              promocodeDiscount: appliedDiscount,
              thumbnail: action.payload.thumbnail,
              quantity: action.payload.quantity || 1,
              stock: action.payload.stock,
              slug: action.payload.slug,
            },
          ],
        };
    }

    case CartActionTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload),
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

    case CartActionTypes.ADD_PROMOCODE: {
        return {
            ...state,
            promocode: { ...action.payload },
            cart: state.cart.map(item => ({
               ...item,
                promocodeDiscount: (action.payload.type === 'ALL' || ( action.payload.type === 'CATEGORY' && action.payload.categories.includes(item.category) ) ) ? action.payload.discount : 0,
            })),      
        }
    }

    case CartActionTypes.REMOVE_PROMOCODE: {
      return {
        ...state,
        promocode: initialState.promocode,
        cart: state.cart.map(item => ({
               ...item,
                promocodeDiscount: 0,
            })),  
      };
    }

    default: {
      return state;
    }
  }
};
