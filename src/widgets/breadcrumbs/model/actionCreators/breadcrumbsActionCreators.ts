import type { Breadcrumb } from '../types/Breadcrumb';
import { SET_BREADCRUMBS } from '../actionTypes/breadcrumbsActionTypes';

export const setBreadcrumbs = (breadcrumbs: Breadcrumb[]) => {
    const withHome: Breadcrumb[] = [
        { label: 'Головна', path: '/' },
        ...breadcrumbs,
    ];

    return {
        type: SET_BREADCRUMBS,
        payload: withHome,
    };
};

//// example

export const breadcrumbsActionCreators = {
    setBreadcrumbs,
};
