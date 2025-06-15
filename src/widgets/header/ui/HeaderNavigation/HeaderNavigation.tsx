//react
import type { FC } from 'react';
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
                typeTabItems="link"
            />
        </>
    );
};
