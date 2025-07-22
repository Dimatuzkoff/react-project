//styles
import styles from './AuthPage.module.scss';
//ui
import {AuthPageForm} from '../AuthPageForm/AuthPageForm';
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
                    <AuthPageForm /> 
                </div>
            </section>
        </>
    );
};
