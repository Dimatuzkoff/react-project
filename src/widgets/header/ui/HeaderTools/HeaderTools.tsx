//react
import { NavLink } from 'react-router-dom';
//styles
import styles from './HeaderTools.module.scss';
//assets
import Cart from '@/shared/libs/assets/svg/icons/cart.svg';
import Wishlist from '@/shared/libs/assets/svg/icons/wishlist.svg';
import Search from '@/shared/libs/assets/svg/icons/search.svg';
//constants
import {
    getWishlistRoute,
    getCartRoute,
} from '@/shared/libs/constants/routes/routes';
//ui
import { Input } from '@/shared/ui/input';
// redux
import { getCartItemCount } from '@/entities/cart/model/selectors/cartSelectors';
import { useSelector } from 'react-redux';
import { getWishlistState } from '@/entities/wishlist/model/selectors/wishlistSelectors'

export const HeaderTools = () => {
    const cartCount = useSelector(getCartItemCount);
    const wishlistCount = useSelector(getWishlistState).wishlist.length;

    return (
        <>
            <div className={styles.headerTools}>
                <div className={styles.inputWrapper}>
                    <Input
                        type="search"
                        placeholder="Що ви шукаєте?"
                        iconAfter={<img src={Search} alt="cart" />}
                        uiType="outline"
                    />
                </div>

                <NavLink to={getWishlistRoute()} className={styles.wishlistIcon}>
                    <img src={Wishlist} alt="wishlist" />
                    {wishlistCount > 0 && (
                        <span className={styles.wishlistCount}>{wishlistCount}</span>
                    )}
                </NavLink>
                <NavLink to={getCartRoute()} className={styles.cartIcon}>
                    <img src={Cart} alt="cart" />
                    {cartCount > 0 && (
                        <span className={styles.cartCount}>{cartCount}</span>
                    )}
                </NavLink>
            </div>
        </>
    );
};
