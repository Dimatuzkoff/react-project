// react
import { useEffect, type FC } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProducts } from '../../model/selectors/productsPageSelectors';
import type { StateSchema } from '@/app/config/store/stateSchema';
import { breadcrumbActionCreators } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
// mockData
import { products } from '@/mockData/products';
// components
import { ProductsFilters } from '../ProductsFilters/ProductsFilters';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { Sidebar } from '@/shared/ui/Sidebar';
import { Pagination } from '@/shared/ui/Pagination';
// hooks 
import { usePageParam } from '@/shared/libs/hooks/usePageParam'; 
// styles
import styles from './ProductsPage.module.scss';
import clsx from 'clsx';

export const ProductsPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(breadcrumbActionCreators.clearBreadcrumbs());
  }, [dispatch]);
  
  const filteredProducts = useSelector((state: StateSchema) =>
    getFilteredProducts(state, products)
  );

    const { page } = usePageParam();
    const pageSize = 12;

    const totalPages = Math.ceil(filteredProducts.length / pageSize);

    const startIndex = (page - 1) * pageSize;
    const paginatedProducts = filteredProducts.slice(
      startIndex,
      startIndex + pageSize
    );

  return (
    <div className={clsx(styles.productsPage, styles.container)}>
      <div className={styles.filtersSidebarDesktop}>
        <Sidebar>
          <ProductsFilters />
        </Sidebar>
      </div>
      <div className={styles.productsWithPagination}>
        <div className={styles.products}>
          {paginatedProducts.length ? (
            paginatedProducts.map(product => (
              <ProductCard key={product.id} product={product} isShowPreview />
            ))
          ) : (
            <p className={styles.noProducts}>
              За вашими фільтрами нічого не знайдено
            </p>
          )}
        </div>

        <div className={styles.paginationBlock}>
          {totalPages > 1 && <Pagination totalPages={totalPages} />}
        </div>
      </div>
    </div>
  );
};
