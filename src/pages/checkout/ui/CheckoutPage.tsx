// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// reduser
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbsActionCreators';
//styles
import styles from './CheckoutPage.module.scss';
export const CheckoutPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumbs([
                { label: 'Checkout', path: '/checkout' },
            ])
        );
    })
    return (
        <>
            <section className={styles.wrapperCheckoutPage}>
                <h1>CheckoutPage</h1>
            </section>
        </>
    );
};
