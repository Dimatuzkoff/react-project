import type { Reducer } from 'redux';
import type { Breadcrumb } from '../types/breadcrumbTypes';
import type { BreadcrumbActions } from '../types/breadcrumbAction';
import { BreadcrumbActionTypes } from '../actionTypes/breadcrumbActionTypes';

export type BreadcrumbsStateType = {
    breadcrumbs: Breadcrumb[];
};

const initialState: BreadcrumbsStateType = {
    breadcrumbs: [],
};

export const breadcrumbReducer: Reducer<
    BreadcrumbsStateType,
    BreadcrumbActions
> = (state = initialState, action) => {
    switch (action.type) {
        case BreadcrumbActionTypes.SET_BREADCRUMBS:
            return {
                ...state,
                breadcrumbs: [...action.payload],
            };

        case BreadcrumbActionTypes.ADD_BREADCRUMB:
            return {
                ...state,
                breadcrumbs: [...state.breadcrumbs, action.payload],
            };

        case BreadcrumbActionTypes.CLEAR_BREADCRUMBS:
            return {
                ...state,
                breadcrumbs: [],
            };

        default:
            return state;
    }
};
