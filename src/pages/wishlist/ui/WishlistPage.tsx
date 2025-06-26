// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// reduser
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbsActionCreators';
//styles
import styles from './WishlistPage.module.scss';
export const WishlistPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumbs([
                { label: 'Wishlist', path: '/wishlist' },
            ])
        );
    })
    return (
        <>
            <section className={styles.wrapperWishlistPage}>
                <h1>WishlistPage</h1>
            </section>
        </>
    );
};
