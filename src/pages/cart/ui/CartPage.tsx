// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// reduser
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbsActionCreators';
//styles
import styles from './CartPage.module.scss';
export const CartPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumbs([
                { label: 'Cart', path: '/cart' },
            ])
        );
    })
    return (
        <>
            <section className={styles.wrapperCartPage}>
                <h1>CartPage</h1>
            </section>
        </>
    );
};
