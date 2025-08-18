//react
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
// redux
import { getViewedProductsState } from '@/features/smartPick/model/selectors/smartPickSelectors';
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
// hooks
import { useProductsByCategory } from '@/features/smartPick/libs/hooks/useProductsByCategory';
// helpers
import { getAmountPreferProducts } from '@/features/smartPick/libs/helpers/getAmountPreferProducts';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// type
import { type Product } from '@/entities/product/model/types/product';
// styles
import styles from './WishlistPage.module.scss';
// ui
import { WishlistList } from '@/entities/wishlist';
import { WishlistSmartPickList } from '@/pages/wishlist/ui/WishlistSmartPickList/WishlistSmartPickList';

export const WishlistPage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const viewedProducts: Product[] = useSelector(getViewedProductsState);
  const amountPreferProducts = getAmountPreferProducts(viewedProducts.length);
  const productsByCategoryBase = useProductsByCategory();
  
  const productsByCategory = useCallback(productsByCategoryBase, []);

  useEffect(() => {
    dispatch(setBreadcrumbs([{ label: 'Закладки', path: routeConfig.wishlist }]));
  }, [dispatch]);

  useEffect(() => {
    const getSmartPickProducts = async () => {
      if (!amountPreferProducts || !Array.isArray(amountPreferProducts) || amountPreferProducts.length === 0) {
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const smartPick: Product[] = [];
        for (const category of amountPreferProducts) {
          const currentCategoryProducts = await productsByCategory(category);
          smartPick.push(...(currentCategoryProducts || []));
        }

        if (smartPick.length === 0) {
          setError('No products found for selected categories');
          return;
        }

        setProducts(smartPick);
      } catch (err) {
        console.error('Error fetching smart pick products:', err);
        setError('Failed to fetch recommended products');
      } finally {
        setIsLoading(false);
      }
    };

    getSmartPickProducts();
  }, [viewedProducts.length, productsByCategory]);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <section className={styles.wrapperWishlistPage}>
      <WishlistList />
      { products.length > 0 && <WishlistSmartPickList products={products} /> }
    </section>
  );
};