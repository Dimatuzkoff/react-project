import { routeConfig } from '@/app/config/route/routeConfig';

export const getHomeRoute = () => routeConfig.home;

export const getContactRoute = () => routeConfig.contact;

export const getAboutRoute = () => routeConfig.about;

export const getAuthRoute = () => routeConfig.auth;

export const getWishlistRoute = () => routeConfig.wishlist;

export const getCartRoute = () => routeConfig.cart;

export const getCheckoutRoute = () => routeConfig.checkout;

export const getAccountRoute = () => routeConfig.account;

// export const getProductByIdRoute = (id: string | number = ':id') =>
//   routeConfig.productById.replace(':id', String(id));

export const getProductBySlugRoute = (slug: string = ':slug') =>
  routeConfig.productBySlug.replace(':slug', slug);

export const getProductsRoute = () => routeConfig.products;

export const getNotFoundRoute = () => routeConfig.notFound;
