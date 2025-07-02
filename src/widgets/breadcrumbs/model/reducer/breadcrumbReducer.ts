import type { Reducer } from 'redux';
import type { Breadcrumb } from '../types/breadcrumbTypes';
import type { BreadcrumbActions } from '../types/breadcrumbAction';
import { BreadcrumbActionTypes } from '../actionTypes/breadcrumbActionTypes';

export type BreadcrumbState = Breadcrumb[];

const initialState: BreadcrumbState = [];

export const breadcrumbReducer: Reducer<BreadcrumbState, BreadcrumbActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case BreadcrumbActionTypes.SET_BREADCRUMBS: {
            return [...action.payload];
        }

        case BreadcrumbActionTypes.ADD_BREADCRUMB: {
            return [...state, action.payload];
        }

        case BreadcrumbActionTypes.CLEAR_BREADCRUMBS: {
            return [];
        }

        default: {
            return state;
        }
    }
};
