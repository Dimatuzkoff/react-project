// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// reduser
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbsActionCreators';
//styles
import styles from './AboutPage.module.scss';
export const AboutPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumbs([
                { label: 'About', path: '/about' },
            ])
        );
    })
    return (
        <>
            <section className={styles.wrapperAboutPage}>
                <h1>AboutPage</h1>
            </section>
        </>
    );
};
