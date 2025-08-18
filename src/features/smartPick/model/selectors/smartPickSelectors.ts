import type { StateSchema } from '@/app/config/store/stateSchema';

export const getViewedProductsState = (state: StateSchema) => state.smartPick.viewedProducts;

export const getViewedProductsCategories = (state: StateSchema) => {
    return state.smartPick.viewedProducts.reduce<Record<string, number>>((acc, product) => {
        const category = product.category;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});
};