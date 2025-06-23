// react
import type { FC } from 'react';
// types
import type { ProductVariant } from '../../model/variant';
// utils
import { isNewProduct } from '@/entities/product/libs/utils/isNewProduct';
// components
import { ProductBadge } from '../ProductBadge';
import { ImageActions } from '../ImageActions';
import { AddToCartButton } from '../AddToCartButton';
// styles
import styles from './ImageWrapper.module.scss';

interface ImageWrapperProps {
    thumbnail: string;
    title: string;
    discountPercentage: number;
    createdAt: string;
    variant?: ProductVariant;
}

export const ImageWrapper: FC<ImageWrapperProps> = ({
    thumbnail,
    title,
    discountPercentage,
    createdAt,
    variant = 'default',
}) => {
    const showBadge = variant !== 'bestSeller';

    return (
        <div className={styles.imageWrapper}>
            {showBadge && (
                <ProductBadge
                    discount={discountPercentage}
                    isNew={isNewProduct(createdAt)}
                />
            )}

            <ImageActions variant={variant} />

            <img src={thumbnail} alt={title} className={styles.thumbnail} />

            <AddToCartButton
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
