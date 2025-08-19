// react
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
// hooks
import { useAddToWishlist, useRemoveFromWishlist } from '@/entities/wishlist/libs/hooks/wishlistActions'
import { useAddToProductStory } from '@/features/smartPick/libs/hooks/smartPickActionsHooks'
// assets
import WishlistIcon from '@/shared/libs/assets/svg/icons/wishlist.svg?react';
import DeleteIcon from '@/shared/libs/assets/svg/icons/delete.svg';
import ViewIcon from '@/shared/libs/assets/svg/icons/view.svg';
// styles
import styles from './ProductActions.module.scss';
// constants
import { getProductBySlugRoute } from '@/shared/libs/constants/routes/routes';
// type
import type { Product } from '@/entities/product/model/types/product'
import { makeIsProductInWishlist } from '@/entities/wishlist/model/selectors/wishlistSelectors'

interface ProductActionsProps {
    isShowWishlist?: boolean;
    isShowPreview?: boolean;
    isShowDelete?: boolean;
    slug?: string;
    product: Product;
}

export const ProductActions: FC<ProductActionsProps> = ({
    isShowWishlist,
    isShowPreview,
    isShowDelete,
    slug,
    product
}) => {
    const navigate = useNavigate();
    const addToProductStory = useAddToProductStory(product);
    const addToWishlist = useAddToWishlist(product);


    const handlePreviewClick = () => {
        if (slug) {
            navigate(getProductBySlugRoute(slug));
            addToProductStory();
        }
    }
    const saveToWishlist = () => {
        addToWishlist();
        addToProductStory();
    }
    const removeFromWishlist = useRemoveFromWishlist(product);
    const isInWishlist = useSelector(makeIsProductInWishlist(product.id));
    
    return (
        <div className={styles.imageActions}>
            <div className={styles.icons}>
                {isShowWishlist && (
                    <span className={styles.icon}>
                        {isInWishlist ? <WishlistIcon className={styles.activeWishlist} onClick={removeFromWishlist}/> : <WishlistIcon onClick={saveToWishlist}/>}
                    </span>
                )}
                {isShowPreview && (
                    <span className={styles.icon} onClick={handlePreviewClick}>
                        <img src={ViewIcon} alt="view" />
                    </span>
                )}
                {isShowDelete && (
                    <span className={styles.icon} onClick={removeFromWishlist}>
                        <img className={styles.deleteIcon} src={DeleteIcon} alt="delete" />
                    </span>
                )}
            </div>
        </div>
    );
};
