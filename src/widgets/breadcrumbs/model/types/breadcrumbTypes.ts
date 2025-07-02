export interface Breadcrumb {
    label: string;
    path?: string;
}

export type BreadcrumbsStateType = {
    breadcrumbs: Breadcrumb[];
};
