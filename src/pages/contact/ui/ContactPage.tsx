// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// reduser
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbsActionCreators';
//styles
import styles from './ContactPage.module.scss';
export const ContactPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumbs([
                { label: 'Contact', path: '/contact' },
            ])
        );
    }, [dispatch]);
    return (
        <>
            <section className={styles.wrapperContactPage}>
                <h1>ContactPage</h1>
            </section>
        </>
    );
};
