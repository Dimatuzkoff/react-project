// react
import type { FC } from 'react';
// types
import type { Product } from '../../model/types/product';
import type { ProductVariant } from '../../model/types/productVariant';
// components
import { ProductCard } from '../ProductCard';

// styles
import styles from './ProductList.module.scss';

interface ProductListProps {
    products: Product[];
    variant: ProductVariant;
    isShowWishList?: boolean;
    isShowView?: boolean;
    isShowDelete?: boolean;
}

export const ProductList: FC<ProductListProps> = ({
    products,
    variant = 'default',
    isShowWishList = true,
    isShowView = true,
    isShowDelete = false,
}) => {
    return (
        <div className={styles.ProductList}>
            <div className={styles.ProductListWrapper}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        variant={variant}
                        isShowWishList={isShowWishList}
                        isShowView={isShowView}
                        isShowDelete={isShowDelete}
                    />
                ))}
            </div>
        </div>
    );
};
