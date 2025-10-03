//react
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
// hooks
import { useClickOutside } from '@/shared/libs/hooks/useClickOutside';
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
import { Dropdown } from '@/shared/ui/dropdown'
import { HeaderToolsFoundProductList } from '@/widgets/header/ui/HeaderToolsFoundProductList/HeaderToolsFoundProductList'
// redux
import { getCartItemCount } from '@/entities/cart/model/selectors/cartSelectors';
import { getWishlistState } from '@/entities/wishlist/model/selectors/wishlistSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '@/pages/products/model/actionCreators/productsPageActionCreators';
import type { Product } from '@/entities/product/model/types/product';
// helpers
import { searchProductsByFields } from '@/widgets/header/libs/helpers/searchProductsByFields'

export const HeaderTools = () => {
        const divClickOutsideRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(divClickOutsideRef, () => setIsDropdownOpen(false));

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const cartCount = useSelector(getCartItemCount);
    const wishlistCount = useSelector(getWishlistState).wishlist.length;

    const [searchValue, setSearchValue] = useState('')
    const [foundProducts, setFoundProducts] = useState<Product[]>([]);

    const onSearchChange = (value: string) => {
        setSearchValue(value);
        if (value.length === 0 ) setIsDropdownOpen(false)
        if (value.length < 3) return
        const products = searchProductsByFields(value)
        setFoundProducts(products)
        setIsDropdownOpen(true)
    };
    const onClick = (slug: string) => {
        navigate(`/product/${slug}`);
        dispatch(setQuery(slug));
        setIsDropdownOpen(false);
        setSearchValue("");
    }
    return (
        <>
            <div className={styles.headerTools}>
                <div ref={divClickOutsideRef} className={styles.inputWrapper} >
                    <Input
                        type="search"
                        placeholder="Що ви шукаєте?"
                        iconAfter={<img src={Search} alt="search" />}
                        uiType="outline"
                        value = { searchValue }
                        onChange={e => onSearchChange(e.target.value)}
                    />
                    <div className={styles.dropdownWrapper}> 
                        <Dropdown isOpen={isDropdownOpen}>
                            <HeaderToolsFoundProductList onClick={onClick} foundProducts={foundProducts}/>
                        </Dropdown >
                    </div>
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
