// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// reduser
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbsActionCreators';
//styles
import styles from './AccountPage.module.scss';
export const AccountPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumbs([
                { label: 'Account', path: '/account' },
            ])
        );
    }, [dispatch]);
    return (
        <>
            <section className={styles.wrapperAccountPage}>
                <h1>AccountPage</h1>
            </section>
        </>
    );
};
