// react
import { useDispatch } from 'react-redux';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
//styles
import styles from './AccountPage.module.scss';
export const AccountPage = () => {
    const dispatch = useDispatch();

    dispatch(setBreadcrumbs([{ label: 'Account', path: routeConfig.account }]));

    return (
        <>
            <section className={styles.wrapperAccountPage}>
                <h1>AccountPage</h1>
            </section>
        </>
    );
};
