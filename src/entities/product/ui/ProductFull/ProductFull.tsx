// react
import type {FC} from 'react'
// mock
import { products } from '@/mockData/products';
// components
import { ProductGallery } from '@/entities/product/ui/ProductGallery';
import { ProductDescription } from '@/entities/product/ui/ProductDescription';
import { ProductList } from '@/entities/product/ui/ProductList';
import { SectionTitle } from '@/shared/ui/SectionTitle';
// types
import type { Product } from '../../model/types/product';
// styles
import styles from './ProductFull.module.scss'

interface ProductFullProps {
    product: Product
}

export const ProductFull: FC<ProductFullProps> = ({ product }) => {
    

    return (
        <div className={styles.productFull}>
            <section className={styles.productInfo}>
                <ProductGallery images={product.images} />
                <ProductDescription
                    title={product.title}
                    description={product.description}
                    rating={product.rating}
                    reviewCount={product.reviews.length}
                    price={product.price}
                />
            </section>
            <section className={styles.relatedItems}>
                <SectionTitle title="Ralated Item" />
                <ProductList
                    products={products.slice(0, 4)}
                    variant="default"
                />
            </section>
        </div>
    );
};
