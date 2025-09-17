import { ProductsPageActionTypes } from '../actionTypes/productsPageActionTypes';
// types
import type { ProductsPageActions } from '../types/productsPageActions';
import type { ProductsPageStateSchema } from '../types/productsTypes';

const initialState: ProductsPageStateSchema = {
  selectedCategories: [],
  selectedBrands: [],
  priceFilter: { min: null, max: null },
  query: '',
  priceSortDirection: null,
  nameSortDirection: null,
  lastSort: null,
};

export const productsPageReducer = (
  state = initialState,
  action: ProductsPageActions
): ProductsPageStateSchema => {
  switch (action.type) {
    case ProductsPageActionTypes.SET_CATEGORIES:
      return { ...state, selectedCategories: action.payload };

    case ProductsPageActionTypes.SET_BRANDS:
      return { ...state, selectedBrands: action.payload };

    case ProductsPageActionTypes.TOGGLE_CATEGORY:
      return {
        ...state,
        selectedCategories: state.selectedCategories.includes(action.payload)
          ? state.selectedCategories.filter(c => c !== action.payload)
          : [...state.selectedCategories, action.payload],
      };

    case ProductsPageActionTypes.TOGGLE_BRAND:
      return {
        ...state,
        selectedBrands: state.selectedBrands.includes(action.payload)
          ? state.selectedBrands.filter(b => b !== action.payload)
          : [...state.selectedBrands, action.payload],
      };

    case ProductsPageActionTypes.SET_QUERY:
      return { ...state, query: action.payload };

    case ProductsPageActionTypes.SET_PRICE_FILTER:
      return {
        ...state,
        priceFilter: action.payload,
      };

    case ProductsPageActionTypes.SET_PRICE_SORT_DIRECTION:
      return {
        ...state,
        priceSortDirection: action.payload,
        lastSort: 'price', // 👈 фиксируем, что последней изменилась сортировка по цене
      };
    
    case ProductsPageActionTypes.SET_NAME_SORT_DIRECTION:
      return {
        ...state,
        nameSortDirection: action.payload,
        lastSort: 'name', // 👈 фиксируем, что последней изменилась сортировка по имени
      };

    case ProductsPageActionTypes.RESET_FILTERS:
      return { ...initialState };

    default:
      return state;
  }
};
