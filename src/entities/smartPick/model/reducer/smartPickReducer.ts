import type { Reducer } from 'redux';
import type { SmartPickStateType } from '../types/smartPickTypes';
import type { SmartPickActions } from '../types/smartPickAction';
import { SmartPickActionTypes } from '../actionTypes/smartPickActionTypes';

const initialState: SmartPickStateType = {
    smartPick: [],
    viewedProducts: [],
};

export const smartPickReducer: Reducer<SmartPickStateType, SmartPickActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case SmartPickActionTypes.ADD_TO_SMART_PICK: {
            return {
                ...state,
                smartPick: [...state.smartPick, { ...action.payload }],
            };
        }
        case SmartPickActionTypes.ADD_TO_VIEWED_PRODUCTS: {
            return {
                ...state,
                viewedProducts: [...state.viewedProducts, { ...action.payload }],
            };
        }
        default: {
            return state;
        }
    }
};
