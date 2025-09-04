// react
import { useEffect } from 'react';
// mock
import { products } from '@/mockData/products';
// redux
import { breadcrumbActionCreators } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
import { useDispatch } from 'react-redux';
// types
import type { Product } from '@/entities/product/model/types/product';
// components
import { ProductList } from '@/entities/product/ui/ProductList/ProductList';
import { CategoriesSidebar } from '@/widgets/categoriesSidebar/ui/CategoriesSidebar';
import { HomePageMainBanner } from '@/pages/home/ui/HomePageMainBanner';
import { SectionTitle } from '@/shared/ui/SectionTitle';
// styles
import styles from './HomePage.module.scss';
import clsx from 'clsx';

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(breadcrumbActionCreators.clearBreadcrumbs());
  }, [dispatch]);

  const topProducts: Product[] = products

  return (
    <main className={clsx(styles.container, styles.homePage)}>
      <section className={styles.heroSection}>
        <div className={styles.categoriesSidebarDesktop}>
          <CategoriesSidebar />
        </div>
        <HomePageMainBanner />
      </section>
      <section className={styles.productSection}>
        <SectionTitle title="Today’s" />
        <ProductList products={topProducts} variant="default" />
        <br />
        {/* <h2>justForYou</h2>
        <ProductList
          products={topProducts}
          variant="justForYou"
          isShowWishList={false}
        />
        <br />
        <h2>bestSeller</h2>
        <ProductList products={topProducts} variant="bestSeller" />
        <br />
        <h2>wishList</h2>
        <ProductList
          products={topProducts}
          variant="wishList"
          isShowWishList={false}
          isShowPreview={false}
          isShowDelete
        />
        <br />
        <h2>explore</h2>
        <ProductList products={topProducts} variant="explore" /> */}
      </section>
    </main>
  );
};
