// react
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
// types
import type { Product } from '@/entities/product/model/types/product';
// constants
import { getProductBySlugRoute } from '@/shared/libs/constants/routes/routes';
// helpers
import { getProductBySlug } from '@/entities/product/libs/helpers/getProductBySlug';
// mock
import { products } from '@/mockData/products';
// components
import { ProductFull } from '@/entities/product/ui/ProductFull';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
// constants
import { capitalize } from '@/shared/libs/constants/capitalize';
// styles
import styles from './ProductPage.module.scss';
import clsx from 'clsx';

export const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const product: Product | undefined = slug
    ? getProductBySlug(products, slug)
    : undefined;

  const dispatch = useDispatch();
  useEffect(() => {
    if (product) {
      dispatch(
        setBreadcrumbs([
          {
            label: capitalize(product.category),
            path: `/products?categories=${product.category}`,
          },
          {
            label: product.title,
            path: getProductBySlugRoute(product.slug),
          },
        ])
      );
    }
  }, [dispatch, product]);

  return (
    <div className={clsx(styles.productPage, styles.container)}>
      {!product ? (
        <p>Товар не знайдено</p>
      ) : (
        <>
          <ProductFull product={product} />
        </>
      )}
    </div>
  );
};
