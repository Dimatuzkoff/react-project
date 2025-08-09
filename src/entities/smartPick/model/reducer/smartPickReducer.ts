import type { Reducer } from 'redux';
import type { SmartPickStateType } from '../types/smartPickTypes';
import type { SmartPickActions } from '../types/smartPickAction';
import { SmartPickActionTypes } from '../actionTypes/smartPickActionTypes';
import {MAX_VIEWED_PRODUCTS } from '@/entities/smartPick/libs/constants/smartPick'

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
            const exists = state.viewedProducts.some((product) => product.id === action.payload.id);
            if (exists) return state;
            return {
                ...state,
                viewedProducts: [ { ...action.payload }, ...state.viewedProducts].slice(0, MAX_VIEWED_PRODUCTS),
            };
        }
        default: {
            return state;
        }
    }
};
