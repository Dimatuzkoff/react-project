// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// reduser
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbsActionCreators';
//styles
import styles from './SignUpPage.module.scss';
export const SignUpPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumbs([
                { label: 'Sign Up', path: '/signup' },
            ])
        );
    })
    return (
        <>
            <section className={styles.wrapperSignUpPage}>
                <h1>SignUpPage</h1>
            </section>
        </>
    );
};
