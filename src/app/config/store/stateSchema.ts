import type { CartStateType } from '@/entities/cart/model/types/cartTypes';
import type { WishlistStateType } from '@/entities/wishlist/model/types/wishlistTypes';
import type { BreadcrumbsStateType } from '@/widgets/breadcrumbs/model/types/breadcrumbTypes';

export type StateSchema = {
    cart: CartStateType;
    wishlist: WishlistStateType;
    breadcrumbs: BreadcrumbsStateType;
};
