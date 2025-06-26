import type { Breadcrumb } from '../types/Breadcrumb';
import { SET_BREADCRUMBS } from '../actionTypes/breadcrumbsActionTypes';

const initialState: Breadcrumb[] = [];

export const breadcrumbsReducer = (
    state = initialState,
    action: { type: string; payload?: Breadcrumb[] }
): Breadcrumb[] => {
    switch (action.type) {
        case SET_BREADCRUMBS:
            return action.payload ?? [];
        default:
            return state;
    }
};
