// react
import { type FC } from 'react';
// redux
import { useSelector } from 'react-redux';
import { getFilteredProducts } from '../../model/selectors/productsPageSelectors';
import type { StateSchema } from '@/app/config/store/stateSchema';
// mockData
import { products as allProducts } from '@/mockData/products';
// components
import { ProductsFilters } from '../ProductsFilters/ProductsFilters';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { Sidebar } from '@/shared/ui/Sidebar';
// styles
import styles from './ProductsPage.module.scss';
import clsx from 'clsx';

export const ProductsPage: FC = () => {
  const products = allProducts.slice(0, 40);

  const filteredProducts = useSelector((state: StateSchema) =>
    getFilteredProducts(state, products)
  );

  return (
    <div className={clsx(styles.productsPage, styles.container)}>
      <div className={styles.filtersSidebarDesktop}>
        <Sidebar>
          <ProductsFilters />
        </Sidebar>
      </div>

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
