// react
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
// styles
import styles from './WishlistPage.module.scss';
// ui
import { WishlistList } from '@/entities/wishlist'
import { SmartPick } from '@/entities/smartPick'

export const WishlistPage = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setBreadcrumbs([{ label: 'Закладки', path: routeConfig.wishlist }]));
    }, [dispatch]);

    return (
        <>
            <section className={styles.wrapperWishlistPage}>
                <WishlistList />
                <SmartPick />
            </section>
        </>
    );
};
