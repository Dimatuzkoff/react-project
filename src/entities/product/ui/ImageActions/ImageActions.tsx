// react
import type { FC } from 'react'
// types
import type { ProductVariant } from '../../model/variant';
// assets
import WishlistIcon from '@/shared/libs/assets/svg/icons/wishlist.svg';
import DeleteIcon from '@/shared/libs/assets/svg/icons/delete.svg';
import ViewIcon from '@/shared/libs/assets/svg/icons/view.svg';
// styles
import styles from './ImageActions.module.scss'

interface ImageActionsProps {
    variant: ProductVariant;
}

export const ImageActions: FC<ImageActionsProps> = ({ variant }) => {
  const showWishlistIcon = ['default', 'bestSeller', 'explore'].includes(
      variant
  );
  const showViewIcon = [
      'default',
      'bestSeller',
      'explore',
      'justForYou',
  ].includes(variant);
  const showDeleteIcon = variant === 'wishList';
return (
    <div className={styles.imageActions}>
        <div className={styles.icons}>
            {showWishlistIcon && (
                <span className={styles.icon}>
                    <img src={WishlistIcon} alt="wishlist" />
                </span>
            )}
            {showViewIcon && (
                <span className={styles.icon}>
                    <img src={ViewIcon} alt="view" />
                </span>
            )}
            {showDeleteIcon && (
                <span className={styles.icon}>
                    <img src={DeleteIcon} alt="delete" />
                </span>
            )}
        </div>
    </div>
);
}
