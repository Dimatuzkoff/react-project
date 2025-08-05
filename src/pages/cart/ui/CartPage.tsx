// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// redux
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
// components
import { CartTable } from '@/entities/cart/ui/CartTable';
//styles
import styles from './CartPage.module.scss';
import clsx from 'clsx';

export const CartPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBreadcrumbs([{ label: 'Кошик', path: routeConfig.cart }]));
    }, [dispatch]);

    return (
        <>
            <div className={clsx(styles.container, styles.cartPage)}>
                <CartTable />
            </div>
        </>
    );
};
