//styles
import styles from './AuthPage.module.scss';
//ui
import {AuthForm} from '@/widgets/auth';
//assets
import AuthImg from "@/shared/libs/assets/svg/authImg.svg"

export const AuthPage = () => {
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
