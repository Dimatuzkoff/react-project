import type { StateSchema } from '@/app/config/store/stateSchema';

export const getCartState = (state: StateSchema) => state.cart;

export const getCartItemCount = (state: StateSchema) => {
  return state.cart.cart.reduce((total, item) => total + item.quantity, 0);
};
