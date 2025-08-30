// react
import { useState, type FC } from 'react';
import { useLocation } from 'react-router-dom';
// assets
import Categories from '@/shared/libs/assets/svg/icons/categories.svg';
import Filter from '@/shared/libs/assets/svg/icons/filter.svg';
// widgets
import { CategoriesSidebarMobile } from '@/widgets/categoriesSidebar/ui/CategoriesSidebarMobile';
import { ProductsFiltersSidebarMobile } from '@/pages/products/ui/ProductsFiltersSidebarMobile';
// constants
import {
  getHomeRoute,
  getProductsRoute,
} from '@/shared/libs/constants/routes/routes';
// styles
import styles from './HeaderMobileButtons.module.scss';

export const HeaderMobileButtons: FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === getHomeRoute();
  const isProductsPage = location.pathname === getProductsRoute();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(false);

  return (
    <>
      {isHomePage && (
        <>
          <button
            onClick={() => setSidebarOpen(prev => !prev)}
            className={styles.drawerButton}
          >
            <img src={Categories} alt="categories" />
          </button>
          <CategoriesSidebarMobile
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        </>
      )}

      {isProductsPage && (
        <>
          <button
            onClick={() => setFilterOpen(prev => !prev)}
            className={styles.drawerButton}
          >
            <img src={Filter} alt="filters" />
          </button>
          <ProductsFiltersSidebarMobile
            isOpen={isFilterOpen}
            onClose={() => setFilterOpen(false)}
          />
        </>
      )}
    </>
  );
};
