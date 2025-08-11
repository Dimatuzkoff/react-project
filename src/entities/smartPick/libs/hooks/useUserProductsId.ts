import { useSelector } from "react-redux";
import { getWishlistStateItemsIds } from '@/entities/wishlist/model/selectors/wishlistSelectors'
import { getCartStateItemsIds } from '@/entities/cart/model/selectors/cartSelectors'

export const useUserProductsId = () => {
    const wishlistItemsIds = useSelector(getWishlistStateItemsIds);
    const cartItemsIds = useSelector(getCartStateItemsIds);

    return [...new Set([...wishlistItemsIds, ...cartItemsIds])];
}