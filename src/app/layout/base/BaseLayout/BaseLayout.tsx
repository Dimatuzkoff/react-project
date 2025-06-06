//react
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
//widgets
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

interface HeaderLayoutProps {
    [key: string]: unknown;
}

export const BaseLayout: FC<HeaderLayoutProps> = ({}) => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
