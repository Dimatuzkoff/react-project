//react
import type { FC } from 'react';
// import { NavLink } from 'react-router-dom';
//styles
// import styles from './HeaderNavigation.module.scss';
//ui
import { Tabs } from '@/widgets/tabs';
//constants
import { headerNavigationItems } from '@/widgets/header/libs/constants/headerNavigationItems';
interface HeaderNavigationProps {
    [key: string]: unknown;
}

export const HeaderNavigation: FC<HeaderNavigationProps> = ({}) => {
    return (
        <>
            <Tabs
                tabsData={headerNavigationItems}
                behavior="scrollable"
                size="40"
            />
        </>
    );
};
