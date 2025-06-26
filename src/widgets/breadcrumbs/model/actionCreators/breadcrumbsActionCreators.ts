import type { Breadcrumb } from '../types/Breadcrumb';
import { SET_BREADCRUMBS } from '../actionTypes/breadcrumbsActionTypes';

export const setBreadcrumbs = (breadcrumbs: Breadcrumb[]) => {
    const withHome: Breadcrumb[] = [
        { label: 'Home', path: '/' },
        ...breadcrumbs,
    ];

    return {
        type: SET_BREADCRUMBS,
        payload: withHome,
    };
};
