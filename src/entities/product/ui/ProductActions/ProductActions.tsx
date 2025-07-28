// react
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
// assets
import WishlistIcon from '@/shared/libs/assets/svg/icons/wishlist.svg';
import DeleteIcon from '@/shared/libs/assets/svg/icons/delete.svg';
import ViewIcon from '@/shared/libs/assets/svg/icons/view.svg';
// styles
import styles from './ProductActions.module.scss';
// constants
import { getProductByIdRoute } from '@/shared/libs/constants/routes/routes';

interface ProductActionsProps {
    isShowWishlist?: boolean;
    isShowPreview?: boolean;
    isShowDelete?: boolean;
    productId: string
}

export const ProductActions: FC<ProductActionsProps> = ({
    isShowWishlist,
    isShowPreview,
    isShowDelete,
    productId
}) => {
    const navigate = useNavigate();

    const handlePreviewClick = () => {
        if (productId) {
            navigate(getProductByIdRoute(productId));
        }
    }
    return (
        <div className={styles.imageActions}>
            <div className={styles.icons}>
                {isShowWishlist && (
                    <span className={styles.icon}>
                        <img src={WishlistIcon} alt="wishlist" />
                    </span>
                )}
                {isShowPreview && (
                    <span className={styles.icon} onClick={handlePreviewClick}>
                        <img src={ViewIcon} alt="view" />
                    </span>
                )}
                {isShowDelete && (
                    <span className={styles.icon}>
                        <img src={DeleteIcon} alt="delete" />
                    </span>
                )}
            </div>
        </div>
    );
};
