import type { StateSchema } from '@/app/config/store/stateSchema';

export const getBreadcrumbs = (state: StateSchema) => state.breadcrumbs;
export const getBreadcrumbsLength = (state: StateSchema) =>
    state.breadcrumbs.length;

