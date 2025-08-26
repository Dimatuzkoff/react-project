// react
import { useState, type FC } from 'react';
// redux
import { useSelector } from 'react-redux';
import { getFilteredProducts } from '../../model/selectors/productsPageSelectors';
import type { StateSchema } from '@/app/config/store/stateSchema';
// mockData
import { products as allProducts } from '@/mockData/products';
// components
import { ProductsFilters } from '../ProductsFilters/ProductsFilters';
// import { ProductsFilters2 } from '../ProductsFilters/ProductsFilters2';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { Sidebar } from '@/shared/ui/Sidebar';
// styles
import styles from './ProductsPage.module.scss';
import clsx from 'clsx';
import type { Product } from '@/entities/product/model/types/product';

export const ProductsPage: FC = () => {
  const products = allProducts.slice(0, 30);
    const [filteredProducts, setFilteredProducts] =
      useState<Product[]>(allProducts);

  // const filteredProducts = useSelector((state: StateSchema) =>
  //   getFilteredProducts(state, products)
  // );

  return (
    <div className={clsx(styles.productsPage, styles.container)}>
      <div className={styles.filtersSidebarDesktop}>
        <Sidebar>
          <ProductsFilters />
          {/* <ProductsFilters2
            products={products}
            onFilter={setFilteredProducts}
          /> */}
        </Sidebar>
      </div>

      {/* <div className={styles.products}>
        {filteredProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div> */}

      <div className={styles.products}>
        {filteredProducts.length ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className={styles.noProducts}>
            За вашими фільтрами нічого не знайдено
          </p>
        )}
      </div>
    </div>
  );
};
