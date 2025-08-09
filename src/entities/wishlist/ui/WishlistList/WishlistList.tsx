// redux
import { useSelector } from "react-redux";
import { getWishlistState } from '@/entities/wishlist/model/selectors/wishlistSelectors'
// types
import { type Product } from '@/entities/product/model/types/product';
// ui
import { WishlistListExtraTools } from '../WishlistListExtraTools/WishlistListExtraTools'
import { ProductList } from "@/entities/product/ui/ProductList/ProductList";
// styles
import styles from './WishlistList.module.scss';

export const WishlistList = () => {

const wishlist: { wishlist: Product[] } = useSelector(getWishlistState);

    return(
        <>
            { wishlist.wishlist.length > 0 && ( 
                <>
                    <WishlistListExtraTools wishlistLength={ wishlist.wishlist.length } /> 
                    <ProductList 
                            products= { wishlist.wishlist }
                            variant="wishList"
                            isShowWishList={false}
                            isShowDelete
                    />
                </>) 
            }
            { !wishlist.wishlist.length && 
                ( <div className={styles.wishlistEmpty}>Список бажань порожній ((</div>)
            }
        </>
    )
}