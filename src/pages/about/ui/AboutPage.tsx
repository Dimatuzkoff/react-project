// react
import { useDispatch } from 'react-redux';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// reduсer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
//styles
import styles from './AboutPage.module.scss';
export const AboutPage = () => {
    const dispatch = useDispatch();

    dispatch(setBreadcrumbs([{ label: 'Про нас', path: routeConfig.about }]));

    return (
        <>
            <section className={styles.wrapperAboutPage}>
                <h1>AboutPage</h1>
            </section>
        </>
    );
};
