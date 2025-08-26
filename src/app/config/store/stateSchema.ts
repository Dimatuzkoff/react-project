import type { CartStateType } from '@/entities/cart/model/types/cartTypes';
import type { WishlistStateType } from '@/entities/wishlist/model/types/wishlistTypes';
import type { BreadcrumbsStateType } from '@/widgets/breadcrumbs/model/types/breadcrumbTypes';
import type { SmartPickStateType } from '@/features/smartPick/model/types/smartPickTypes'
import type { ProductsPageStateSchema } from '@/pages/products/model/types/productsTypes';

export type StateSchema = {
    cart: CartStateType;
    wishlist: WishlistStateType;
    breadcrumbs: BreadcrumbsStateType;
    smartPick: SmartPickStateType;
    products: ProductsPageStateSchema
};
