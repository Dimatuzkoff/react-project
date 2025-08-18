import { SmartPickActionTypes } from '../actionTypes/smartPickActionTypes';
import { type Product } from '@/entities/product/model/types/product';

export type AddToViewedProductsType = {
    type: SmartPickActionTypes.ADD_TO_VIEWED_PRODUCTS;
    payload: Product;
};

export type SmartPickActions =
    | AddToViewedProductsType
