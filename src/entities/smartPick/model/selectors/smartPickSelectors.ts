import type { StateSchema } from '@/app/config/store/stateSchema';

export const getSmartPickState = (state: StateSchema) => state.smartPick.smartPick;

export const getViewedProductsState = (state: StateSchema) => state.smartPick.viewedProducts;

