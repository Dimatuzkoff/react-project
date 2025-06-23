//react
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
//widgets
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Breadcrumbs } from '@/widgets/breadcrumbs';

interface HeaderLayoutProps {
    [key: string]: unknown;
}

export const BaseLayout: FC<HeaderLayoutProps> = ({}) => {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <Outlet />
            <Footer />
        </>
    );
};
