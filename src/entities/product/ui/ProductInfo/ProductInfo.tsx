// react
import type { FC } from 'react';
// components
import { ProductRatingBlock } from '../ProductRatingBlock';
// types
import type { ProductVariant } from '../../model/types/productVariant';
// libs
import clsx from 'clsx';
// styles
import styles from './ProductInfo.module.scss';

interface ProductInfoProps {
    title: string;
    price: number;
    oldPrice: number | null;
    rating: number;
    reviewCount: number;
    variant?: ProductVariant;
}

export const ProductInfo: FC<ProductInfoProps> = ({
    title,
    price,
    oldPrice,
    rating,
    reviewCount,
    variant,
}) => {
    const isExplore = variant === 'explore';
    return (
        <div className={styles.productInfo}>
            <h3 className={styles.title}>{title}</h3>
            <div className={clsx({ [styles.row]: isExplore })}>
                <div className={styles.priceBlock}>
                    <span className={styles.currentPrice}>${price}</span>
                    {oldPrice && (
                        <span className={styles.oldPrice}>${oldPrice}</span>
                    )}
                </div>
                {variant !== 'wishList' && (
                    <ProductRatingBlock
                        rating={rating}
                        reviewCount={reviewCount}
                    />
                )}
            </div>
        </div>
    );
};
