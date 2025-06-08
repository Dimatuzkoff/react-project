import {
    getHomeRoute,
    getContactRoute,
    getAboutRoute,
    getSingUpRoute,
} from '@/shared/libs/constants/routes/routes';

export const headerNavigationItems = [
    {
        label: 'Головна',
        path: getHomeRoute(),
    },
    {
        label: 'Контакти',
        path: getContactRoute(),
    },
    {
        label: 'Про нас',
        path: getAboutRoute(),
    },
    {
        label: 'Зареєструватися',
        path: getSingUpRoute(),
    },
];
