import type { CartStateType } from '@/entities/cart/model/types/cartTypes';
import type { WishlistStateType } from '@/entities/wishlist/model/types/wishlistTypes';
import type { BreadcrumbsStateType } from '@/widgets/breadcrumbs/model/types/breadcrumbTypes';
import type { SmartPickStateType } from '@/entities/smartPick/model/types/smartPickTypes'

export type StateSchema = {
    cart: CartStateType;
    wishlist: WishlistStateType;
    breadcrumbs: BreadcrumbsStateType;
    smartPick: SmartPickStateType;
};
