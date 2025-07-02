// react
import { useDispatch } from 'react-redux';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
//styles
import styles from './SignUpPage.module.scss';
export const SignUpPage = () => {
    const dispatch = useDispatch();

    dispatch(
        setBreadcrumbs([{ label: 'Зареєструватися', path: routeConfig.signUp }])
    );

    return (
        <>
            <section className={styles.wrapperSignUpPage}>
                <h1>SignUpPage</h1>
            </section>
        </>
    );
};
