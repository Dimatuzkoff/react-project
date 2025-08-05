import type { StateSchema } from '@/app/config/store/stateSchema';

export const getCartState = (state: StateSchema) => state.cart;

export const getCartItemCount = (state: StateSchema): number => {
    return state.cart.cart.reduce((total, item) => total + item.quantity, 0);
};
