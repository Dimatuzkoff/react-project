// react
import { useDispatch } from 'react-redux';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
//styles
import styles from './NotFound.module.scss';
export const NotFound = () => {
    const dispatch = useDispatch();

    dispatch(setBreadcrumbs([{ label: '404', path: routeConfig.notFound }]));

    return (
        <>
            <section className={styles.wrapperNotFound}>
                <h1>404</h1>
            </section>
        </>
    );
};
