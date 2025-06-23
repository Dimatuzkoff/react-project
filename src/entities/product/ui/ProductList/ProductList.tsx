// react
import type { FC } from 'react';
// types
import type { Product } from '../../model/types';
import type { ProductVariant } from '../../model/variant';
// components
import { ProductCard } from '../ProductCard';

// styles
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: Product[];
  variant: ProductVariant;
}

export const ProductList: FC<ProductListProps> = ({ products, variant = 'default' }) => {
    return (
        <div className={styles.ProductList}>
            <div className={styles.ProductListWrapper}
            >
                {products.map(product => (
                    <ProductCard key={product.id} product={product} variant={variant} />
                ))}
            </div>
        </div>
    );
};
