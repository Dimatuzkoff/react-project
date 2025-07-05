// react
import { useDispatch } from 'react-redux';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
//styles
import styles from './WishlistPage.module.scss';
export const WishlistPage = () => {
    const dispatch = useDispatch();

    dispatch(
        setBreadcrumbs([{ label: 'Закладки', path: routeConfig.wishlist }])
    );

    return (
        <>
            <section className={styles.wrapperWishlistPage}>
                <h1>WishlistPage</h1>
            </section>
        </>
    );
};
