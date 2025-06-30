// react
import type { FC } from 'react';
// types
import type { Product } from '../../model/types/product';
import type { ProductVariant } from '../../model/types/productVariant';
// components
import { ProductImageBlock } from '../ProductImageBlock';
import { ProductInfo } from '../ProductInfo';
// helpers
import { getOldPrice } from '../../libs/helper/getOldPrice';
// styles
import styles from './ProductCard.module.scss';

interface ProductCardProps {
    product: Product;
    variant?: ProductVariant;
    isShowWishList?: boolean;
    isShowPreview?: boolean;
    isShowDelete?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
    product,
    variant = 'default',
    isShowWishList,
    isShowPreview,
    isShowDelete,
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

    const oldPrice = getOldPrice(price, discountPercentage);

    const thumbnailUrl = thumbnail || images[0];

    return (
        <div className={styles.productCard}>
            <ProductImageBlock
                thumbnail={thumbnailUrl}
                title={title}
                discountPercentage={discountPercentage}
                createdAt={createdAt}
                variant={variant}
                isShowWishList={isShowWishList}
                isShowPreview={isShowPreview}
                isShowDelete={isShowDelete}
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
