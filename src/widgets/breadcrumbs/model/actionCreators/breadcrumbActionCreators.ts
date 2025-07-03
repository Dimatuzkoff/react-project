import { BreadcrumbActionTypes } from '../actionTypes/breadcrumbActionTypes';
import type {
    SetBreadcrumbsAction,
    AddBreadcrumbAction,
    ClearBreadcrumbsAction,
} from '../types/breadcrumbAction';
import type { Breadcrumb } from '../types/breadcrumbTypes';
import {HOME_BREADCRUMB } from '../../libs/constants/breadcrumbConstants';

export const setBreadcrumbs = (
    breadcrumbs: Breadcrumb[],
    withHome: boolean = true
): SetBreadcrumbsAction => {
    const result = withHome ? [HOME_BREADCRUMB, ...breadcrumbs] : breadcrumbs;

    return {
        type: BreadcrumbActionTypes.SET_BREADCRUMBS,
        payload: result,
    };
};

const addBreadcrumb = (
    payload: AddBreadcrumbAction['payload']
): AddBreadcrumbAction => {
    return {
        type: BreadcrumbActionTypes.ADD_BREADCRUMB,
        payload,
    };
};

const clearBreadcrumbs = (): ClearBreadcrumbsAction => {
    return {
        type: BreadcrumbActionTypes.CLEAR_BREADCRUMBS,
    };
};

export const breadcrumbActionCreators = {
    setBreadcrumbs,
    addBreadcrumb,
    clearBreadcrumbs,
};
