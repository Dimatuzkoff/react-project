// react
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// mock
import { products } from '@/mockData/products';
// components
import { ProductGallery } from '@/entities/product/ui/ProductGallery';
import { ProductDescription } from '@/entities/product/ui/ProductDescription';
import { ProductList } from '@/entities/product/ui/ProductList';
import { SectionTitle } from '@/shared/ui/SectionTitle';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
// styles
import styles from './ProductPage.module.scss';
import clsx from 'clsx';

export const ProductPage = () => {
    const dispatch = useDispatch();

    dispatch(
        setBreadcrumbs([{ label: 'Продукт', path: routeConfig.productById }])
    );

    const { id } = useParams();

    const product = products.find(p => String(p.id) === id);

    return (
        <div className={clsx(styles.productPage, styles.container)}>
            {!product ? (
                <p>Товар не знайдено</p>
            ) : (
                <>
                    <section className={styles.productInfo}>
                        <ProductGallery images={product.images} />
                        <ProductDescription
                            title={product.title}
                            description={product.description}
                            rating={product.rating}
                            reviewCount={product.reviews.length}
                            price={product.price}
                        />
                    </section>
                    <section className={styles.relatedItems}>
                        <SectionTitle title="Ralated Item" />
                        <ProductList
                            products={products.slice(0, 4)}
                            variant="default"
                        />
                    </section>
                </>
            )}
        </div>
    );
};
