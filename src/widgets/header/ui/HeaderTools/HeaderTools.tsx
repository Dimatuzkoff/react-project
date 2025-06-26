//react
import { NavLink } from 'react-router-dom';
//styles
import styles from './HeaderTools.module.scss';
//assets
import Cart from '@/shared/libs/assets/svg/icons/cart.svg';
import Wishlist from '@/shared/libs/assets/svg/icons/wishlist.svg';
// import Search from '@/shared/libs/assets/svg/icons/search.svg';
//constants
import {
    getWishlistRoute,
    getCartRoute,
} from '@/shared/libs/constants/routes/routes';
//ui
// import { Input } from '@/shared/ui/input';
export const HeaderTools = () => {
    return (
        <>
            <div className={styles.hederTools}>
                {/* <div className={styles.inputWrapper}>
                    <Input
                        type="search"
                        placeholder="Що ви шукаєте?"
                        iconAfter={<img src={Search} alt="cart" />}
                        isQuiet
                    />
                </div> */}

                <NavLink to={getWishlistRoute()}>
                    <img src={Wishlist} alt="wishlist" />
                </NavLink>
                <NavLink to={getCartRoute()}>
                    <img src={Cart} alt="cart" />
                </NavLink>
            </div>
        </>
    );
};
