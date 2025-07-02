import { BreadcrumbActionTypes } from '../actionTypes/breadcrumbActionTypes';
import type { Breadcrumb } from './breadcrumbTypes';

export type SetBreadcrumbsAction = {
    type: BreadcrumbActionTypes.SET_BREADCRUMBS;
    payload: Breadcrumb[];
};

export type AddBreadcrumbAction = {
    type: BreadcrumbActionTypes.ADD_BREADCRUMB;
    payload: Breadcrumb;
};

export type ClearBreadcrumbsAction = {
    type: BreadcrumbActionTypes.CLEAR_BREADCRUMBS;
};

export type BreadcrumbActions =
    | SetBreadcrumbsAction
    | AddBreadcrumbAction
    | ClearBreadcrumbsAction;