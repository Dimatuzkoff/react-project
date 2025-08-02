//styles
import styles from './AuthPage.module.scss';
// react
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
//ui
import {AuthForm} from '@/widgets/auth';
//assets
import AuthImg from "@/shared/libs/assets/svg/authImg.svg"
// constants
import { routeConfig } from '@/app/config/route/routeConfig';

export const AuthPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBreadcrumbs([{ label: 'Авторизація', path: routeConfig.auth }]));
    }, [dispatch]);

    return (
        <>
            <section className={styles.wrapperAuthPage}>
                <div className={styles.wrapperAuthImg}>
                    <img src={AuthImg} alt="authImg" />
                </div>
                <div className={styles.wrapperAuthForm}>
                    <AuthForm /> 
                </div>
            </section>
        </>
    );
};
