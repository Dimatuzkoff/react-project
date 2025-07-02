// react
import { useDispatch } from 'react-redux';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
//styles
import styles from './ContactPage.module.scss';
export const ContactPage = () => {
    const dispatch = useDispatch();

    dispatch(
        setBreadcrumbs([{ label: 'Контакти', path: routeConfig.contact }])
    );

    return (
        <>
            <section className={styles.wrapperContactPage}>
                <h1>ContactPage</h1>
            </section>
        </>
    );
};
