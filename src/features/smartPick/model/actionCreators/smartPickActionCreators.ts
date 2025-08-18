import { SmartPickActionTypes } from '../actionTypes/smartPickActionTypes';
import type { AddToViewedProductsType } from '../types/smartPickAction';

const addProductToViewedProducts = (
    payload: AddToViewedProductsType['payload']
): AddToViewedProductsType => {
    return {
        type: SmartPickActionTypes.ADD_TO_VIEWED_PRODUCTS,
        payload: payload,
    };
};

export const smartPickActionCreators = {
    addProductToViewedProducts,
};
