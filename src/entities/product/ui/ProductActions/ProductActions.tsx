// react
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
// hooks
import { useAddToWishlist, useRemoveFromWishlist } from '@/entities/wishlist/libs/hooks/wishlistActions'
// assets
import WishlistIcon from '@/shared/libs/assets/svg/icons/wishlist.svg';
import DeleteIcon from '@/shared/libs/assets/svg/icons/delete.svg';
import ViewIcon from '@/shared/libs/assets/svg/icons/view.svg';
// styles
import styles from './ProductActions.module.scss';
// constants
import { getProductBySlugRoute } from '@/shared/libs/constants/routes/routes';
// type
import type { Product } from '@/entities/product/model/types/product'

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

    const handlePreviewClick = () => {
        if (slug) {
            navigate(getProductBySlugRoute(slug));
        }
    }
     const addToWishlist = useAddToWishlist(product)
    const removeFromWishlist = useRemoveFromWishlist(product);
    return (
        <div className={styles.imageActions}>
            <div className={styles.icons}>
                {isShowWishlist && (
                    <span className={styles.icon}>
                        <img src={WishlistIcon} alt="wishlist" onClick={addToWishlist}/>
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
