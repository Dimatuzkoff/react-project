import type { StateSchema } from '@/app/config/store/stateSchema';

export const getCartState = (state: StateSchema) => state.cart;
