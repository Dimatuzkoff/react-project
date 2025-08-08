// redux
import { useSelector } from "react-redux";
import { getWishlistState } from '@/entities/wishlist/model/selectors/wishlistSelectors'
// types
import { type Product } from '@/entities/product/model/types/product';
// ui
import { WishlistListExtraTools } from '../WishlistListExtraTools/WishlistListExtraTools'

export const WishlistList = () => {

const wishlist: { wishlist: Product[] } = useSelector(getWishlistState);

    return(
        <>
            <WishlistListExtraTools wishlistLength={ wishlist.wishlist.length } />
        </>
    )
}