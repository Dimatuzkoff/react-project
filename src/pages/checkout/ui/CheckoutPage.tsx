// react
import { useDispatch } from 'react-redux';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
//styles
import styles from './CheckoutPage.module.scss';
export const CheckoutPage = () => {
    const dispatch = useDispatch();

    dispatch(
        setBreadcrumbs([
            { label: 'Оформлення замовлення', path: routeConfig.checkout },
        ])
    );

    return (
        <>
            <section className={styles.wrapperCheckoutPage}>
                <h1>CheckoutPage</h1>
            </section>
        </>
    );
};
