// react
import type { FC } from 'react';
// types
import type { ProductVariant } from '../../model/types/productVariant';
// utils
import { isNewProduct } from '@/entities/product/libs/utils/isNewProduct';
// components
import { ProductActions } from '../ProductActions';
import { ProductButton } from '../ProductButton';
// styles
import styles from './ProductImage.module.scss';

interface ProductImageProps {
    thumbnail: string;
    title: string;
    discountPercentage: number;
    createdAt: string;
    variant?: ProductVariant;
    isShowWishList?: boolean;
    isShowView?: boolean;
    isShowDelete?: boolean;
}

export const ProductImage: FC<ProductImageProps> = ({
    thumbnail,
    title,
    discountPercentage,
    createdAt,
    variant = 'default',
    isShowWishList,
    isShowView,
    isShowDelete,
}) => {
    const showBadge = variant !== 'bestSeller';
    const isNew = isNewProduct(createdAt);
    const hasDiscount = discountPercentage > 0;

    return (
        <div className={styles.imageWrapper}>
            {showBadge && (
                <>
                    {hasDiscount && (
                        <div className={styles.discountBadge}>
                            -{Math.round(discountPercentage)}%
                        </div>
                    )}
                    {!hasDiscount && isNew && (
                        <div className={styles.newBadge}>New</div>
                    )}
                </>
            )}

            <ProductActions
                isShowWishlist={isShowWishList}
                isShowView={isShowView}
                isShowDelete={isShowDelete}
            />

            <img src={thumbnail} alt={title} className={styles.thumbnail} />

            <ProductButton
                variant={variant}
                className={
                    variant === 'default' || variant === 'explore'
                        ? styles.visibleOnHover
                        : undefined
                }
            />
        </div>
    );
};
