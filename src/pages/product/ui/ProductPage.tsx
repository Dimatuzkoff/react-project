// react
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// types
import type { Product } from '@/entities/product/model/types/product';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// helpers
import { getProductById } from '@/entities/product/libs/helper/getProductById';
// mock
import { products } from '@/mockData/products';
// components
import { ProductFull } from '@/entities/product/ui/ProductFull';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
// styles
import styles from './ProductPage.module.scss';
import clsx from 'clsx';

export const ProductPage = () => {
    const dispatch = useDispatch();

    const { id } = useParams<{ id: string }>();

    const product: Product | undefined = id
        ? getProductById(products, id)
        : undefined;

    dispatch(
        setBreadcrumbs([{ label: 'Продукт', path: routeConfig.productById }])
    );

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
