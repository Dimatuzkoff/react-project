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
import styles from './ProductImageBlock.module.scss';

interface ProductImageBlockProps {
    thumbnail: string;
    title: string;
    discountPercentage: number;
    createdAt: string;
    variant?: ProductVariant;
    isShowWishList?: boolean;
    isShowPreview?: boolean;
    isShowDelete?: boolean;
    productId: string;
}

export const ProductImageBlock: FC<ProductImageBlockProps> = ({
    thumbnail,
    title,
    discountPercentage,
    createdAt,
    variant = 'default',
    isShowWishList,
    isShowPreview,
    isShowDelete,
    productId,
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
                isShowPreview={isShowPreview}
                isShowDelete={isShowDelete}
                productId={productId}
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
