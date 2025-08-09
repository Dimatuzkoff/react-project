import { SmartPickActionTypes } from '../actionTypes/smartPickActionTypes';
import type {
    AddToViewedProductsType, AddToSmartPickType
} from '../types/smartPickAction';

const addProductToViewedProducts = (
    payload: AddToViewedProductsType['payload']
): AddToViewedProductsType => {
    return {
        type: SmartPickActionTypes.ADD_TO_VIEWED_PRODUCTS,
        payload: payload,
    };
};

const addProductToSmartPick = (
    payload: AddToSmartPickType['payload']
): AddToSmartPickType => {
    return {
        type: SmartPickActionTypes.ADD_TO_SMART_PICK,
        payload: payload,
    };
};

export const smartPickActionCreators = {
    addProductToViewedProducts,
    addProductToSmartPick,
};
