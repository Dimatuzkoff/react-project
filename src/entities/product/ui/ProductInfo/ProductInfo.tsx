// react
import type { FC } from 'react';
// components
import { PriceBlock } from '../PriceBlock';
import { RatingBlock } from '../RatingBlock';
// types
import type { ProductVariant } from '../../model/variant';
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
                <PriceBlock price={price} oldPrice={oldPrice} />
                {variant !== 'wishList' && (
                    <RatingBlock rating={rating} reviewCount={reviewCount} />
                )}
            </div>
        </div>
    );
};
