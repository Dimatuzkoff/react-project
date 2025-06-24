//react
import type { FC } from 'react';
import { Route, Routes } from 'react-router';
//layout
import { BaseLayout } from '@/app/layout/base';
//pages
import { AboutPage } from '@/pages/about';
import { AccountPage } from '@/pages/account';
import { CartPage } from '@/pages/cart';
import { CheckoutPage } from '@/pages/checkout';
import { ContactPage } from '@/pages/contact';
import { HomePage } from '@/pages/home';
import { NotFound } from '@/pages/notFound';
import { ProductPage } from '@/pages/product';
import { SingUpPage } from '@/pages/singUp';
import { WishlistPage } from '@/pages/wishlist';
//constants
import {
    getHomeRoute,
    getContactRoute,
    getAboutRoute,
    getSingUpRoute,
    getWishlistRoute,
    getCartRoute,
    getCheckoutRoute,
    getAccountRoute,
    getProductRoute,
    getNotFoundRoute,
} from '@/shared/libs/constants/routes/routes';

interface AppRouterProps {
    [key: string]: unknown;
}
export const AppRouter: FC<AppRouterProps> = ({}) => {
    return (
        <Routes>
            <Route element={<BaseLayout />}>
                <Route path={getHomeRoute()} element={<HomePage />} />
                <Route path={getContactRoute()} element={<ContactPage />} />
                <Route path={getAboutRoute()} element={<AboutPage />} />
                <Route path={getSingUpRoute()} element={<SingUpPage />} />
                <Route path={getWishlistRoute()} element={<WishlistPage />} />
                <Route path={getCartRoute()} element={<CartPage />} />
                <Route path={getCheckoutRoute()} element={<CheckoutPage />} />
                <Route path={getAccountRoute()} element={<AccountPage />} />
                <Route path={getProductRoute()} element={<ProductPage />} />
                <Route path={getNotFoundRoute()} element={<NotFound />} />
            </Route>
        </Routes>
    );
};
