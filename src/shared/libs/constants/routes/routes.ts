import { routeConfig } from '@/app/config/route/routeConfig';

export const getHomeRoute = () => routeConfig.home;

export const getContactRoute = () => routeConfig.contact;

export const getAboutRoute = () => routeConfig.about;

<<<<<<< HEAD
export const getSignUpRoute = () => routeConfig.signUp;
=======
export const getSingUpRoute = () => routeConfig.singUp;
>>>>>>> aa9131d (feat(scrum-3): created AppRouter and some constants for routes)

export const getWishlistRoute = () => routeConfig.wishlist;

export const getCartRoute = () => routeConfig.cart;

export const getCheckoutRoute = () => routeConfig.checkout;

export const getAccountRoute = () => routeConfig.account;

<<<<<<< HEAD
export const getProductByIdRoute = (id: string | number = ':id') =>
    routeConfig.productById.replace(':id', String(id));
=======
export const getProductRoute = () => routeConfig.product;
>>>>>>> aa9131d (feat(scrum-3): created AppRouter and some constants for routes)

export const getNotFoundRoute = () => routeConfig.notFound;
