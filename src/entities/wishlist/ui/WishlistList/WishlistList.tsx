// redux
import { useSelector } from "react-redux";
import { getWishlistState } from '@/entities/wishlist/model/selectors/wishlistSelectors'

export const WishlistList = () => {

    const list = useSelector(getWishlistState)
    console.log(list);
    

    return(
        <>
            <h1>WishlistList</h1>
        </>
    )
}