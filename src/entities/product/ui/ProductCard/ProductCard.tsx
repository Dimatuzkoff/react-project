// react
import type { FC } from 'react';
// types
import type { Product } from '../../model/types';
import type { ProductVariant } from '../../model/variant';
// components
import { ImageWrapper } from '../ImageWrapper';
import { ProductInfo } from '../ProductInfo';
// styles
import styles from './ProductCard.module.scss';

interface ProductCardProps {
    product: Product;
    variant?: ProductVariant;
}

export const ProductCard: FC<ProductCardProps> = ({
    product,
    variant = 'default',
}) => {
    const {
        title,
        price,
        discountPercentage,
        rating,
        images,
        thumbnail,
        reviews,
        meta: { createdAt },
    } = product;

    const oldPrice =
        discountPercentage > 0
            ? Math.round(price / (1 - discountPercentage / 100))
            : null;

    const thumbnailUrl = thumbnail || images[0];

    return (
        <div className={styles.productCard}>
            <ImageWrapper
                thumbnail={thumbnailUrl}
                title={title}
                discountPercentage={discountPercentage}
                createdAt={createdAt}
                variant={variant}
            />
            <ProductInfo
                title={title}
                price={price}
                oldPrice={oldPrice}
                rating={rating}
                reviewCount={reviews.length}
                variant={variant}
            />
        </div>
    );
};
