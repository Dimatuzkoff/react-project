import type { StateSchema } from '@/app/config/store/stateSchema';

export const getBreadcrumbs = (state: StateSchema) =>
    state.breadcrumbs.breadcrumbs;

export const getBreadcrumbsLength = (state: StateSchema) =>
    state.breadcrumbs.breadcrumbs.length;
