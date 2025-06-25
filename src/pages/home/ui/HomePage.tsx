import { products } from '@/mockData/products';
// types
import type { Product } from '@/entities/product/model/types/types';
// components
import { ProductList } from '@/entities/product/ui/ProductList/ProductList';
// styles
import styles from './HomePage.module.scss';

export const HomePage = () => {
    const topProducts: Product[] = products.slice(0, 5);

    return (
        <section className={styles.wrapperHomePage}>
            <div className={styles.container}>
                <h1>HomePage</h1>
                <div>
                    <br />
                    <h2>default</h2>
                    <ProductList products={topProducts} variant="default" />
                    <br />
                    <h2>justForYou</h2>
                    <ProductList products={topProducts} variant="justForYou" />
                    <br />
                    <h2>bestSeller</h2>
                    <ProductList products={topProducts} variant="bestSeller" />
                    <br />
                    <h2>wishList</h2>
                    <ProductList products={topProducts} variant="wishList" />
                    <br />
                    <h2>explore</h2>
                    <ProductList products={topProducts} variant="explore" />
                </div>
            </div>
        </section>
    );
};
