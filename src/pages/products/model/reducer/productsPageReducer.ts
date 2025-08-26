import {
  SET_PRICE_SORT_DIRECTION,
  SET_NAME_SORT_DIRECTION,
  SET_PRICE_FILTER,
  SET_QUERY,
  TOGGLE_CATEGORY,
  TOGGLE_BRAND,
  RESET_FILTERS,
  SET_CATEGORIES,
  SET_BRANDS,
} from '../actionTypes/productsPageTypes';
import type { ProductsPageActions } from '../types/ProductsPageActions';

interface ProductsPageState {
  selectedCategories: string[];
  selectedBrands: string[];
  priceFilter: { min: number | null; max: number | null };
  query: string;
  priceSortDirection: 'asc' | 'desc' | null;
  nameSortDirection: 'asc' | 'desc' | null;
}

const initialState: ProductsPageState = {
  selectedCategories: [],
  selectedBrands: [],
  priceFilter: { min: null, max: null },
  query: '',
  priceSortDirection: null,
  nameSortDirection: null,
};

export const productsPageReducer = (
  state = initialState,
  action: ProductsPageActions
): ProductsPageState => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, selectedCategories: action.payload };

    case SET_BRANDS:
      return { ...state, selectedBrands: action.payload };

    case TOGGLE_CATEGORY:
      return {
        ...state,
        selectedCategories: state.selectedCategories.includes(action.payload)
          ? state.selectedCategories.filter(c => c !== action.payload)
          : [...state.selectedCategories, action.payload],
      };

    case TOGGLE_BRAND:
      return {
        ...state,
        selectedBrands: state.selectedBrands.includes(action.payload)
          ? state.selectedBrands.filter(b => b !== action.payload)
          : [...state.selectedBrands, action.payload],
      };

    case SET_QUERY:
      return { ...state, query: action.payload };

    case SET_PRICE_FILTER:
      return { ...state, priceFilter: action.payload };

    case SET_PRICE_SORT_DIRECTION:
      return { ...state, priceSortDirection: action.payload };

    case SET_NAME_SORT_DIRECTION:
      return { ...state, nameSortDirection: action.payload };

    case RESET_FILTERS:
      return { ...initialState };

    default:
      return state;
  }
};
