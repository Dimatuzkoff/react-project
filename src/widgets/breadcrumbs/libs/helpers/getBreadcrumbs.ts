import { breadcrumbNameMap } from '../../model/config';

export const getBreadcrumbs = (pathname: string) => {
    const parts = pathname.split('/').filter(Boolean);

    const breadcrumbs = parts.map((_, index) => {
        const path = '/' + parts.slice(0, index + 1).join('/');
        const label =
            breadcrumbNameMap[path] ||
            decodeURIComponent(path.split('/').pop() || '');
        return { path, label };
    });

    return [
        { path: '/', label: breadcrumbNameMap['/'] || 'Home' },
        ...breadcrumbs,
    ];
};
