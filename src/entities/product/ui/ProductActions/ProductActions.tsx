// react
import type { FC } from 'react';
// assets
import WishlistIcon from '@/shared/libs/assets/svg/icons/wishlist.svg';
import DeleteIcon from '@/shared/libs/assets/svg/icons/delete.svg';
import ViewIcon from '@/shared/libs/assets/svg/icons/view.svg';
// styles
import styles from './ProductActions.module.scss';

interface ProductActionsProps {
    isShowWishlist?: boolean;
    isShowView?: boolean;
    isShowDelete?: boolean;
}

export const ProductActions: FC<ProductActionsProps> = ({
    isShowWishlist,
    isShowView,
    isShowDelete,
}) => {
    return (
        <div className={styles.imageActions}>
            <div className={styles.icons}>
                {isShowWishlist && (
                    <span className={styles.icon}>
                        <img src={WishlistIcon} alt="wishlist" />
                    </span>
                )}
                {isShowView && (
                    <span className={styles.icon}>
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
