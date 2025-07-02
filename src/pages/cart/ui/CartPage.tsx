// react
import { useDispatch } from 'react-redux';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
//styles
import styles from './CartPage.module.scss';
export const CartPage = () => {
    const dispatch = useDispatch();

    dispatch(setBreadcrumbs([{ label: 'Кошик', path: routeConfig.cart }]));

    return (
        <>
            <section className={styles.wrapperCartPage}>
                <h1>CartPage</h1>
            </section>
        </>
    );
};
