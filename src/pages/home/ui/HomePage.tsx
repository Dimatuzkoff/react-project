// react
import { useEffect } from 'react';
// mock
// import { products } from '@/mockData/products';
// redux
import { breadcrumbActionCreators } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
import { useDispatch } from 'react-redux';
// types
// import type { Product } from '@/entities/product/model/types/product';
// components
// import { ProductList } from '@/entities/product/ui/ProductList/ProductList';
import { CategoriesSidebar } from '@/widgets/categoriesSidebar';
import { MainBanner } from '@/widgets/mainBanner/ui/MainBanner';
// styles
import styles from './HomePage.module.scss';
import clsx from 'clsx';

export const HomePage = () => {
//   const topProducts: Product[] = products.slice(0, 5);

  const dispatch = useDispatch();
  const { clearBreadcrumbs } = breadcrumbActionCreators;
  useEffect(() => {
    dispatch(clearBreadcrumbs());
  }, [dispatch, clearBreadcrumbs]);

  return (
    <section className={clsx(styles.container, styles.homePage)}>
      <div className={styles.heroSection}>
        <CategoriesSidebar />
        <MainBanner />
      </div>
      <br />
      {/* <div>
        <h2>default</h2>
        <ProductList products={topProducts} variant="default" />
        <br />
        <h2>justForYou</h2>
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
        <ProductList products={topProducts} variant="explore" />
      </div> */}
    </section>
  );
};
