//styles
import styles from './SignUpPage.module.scss';
//ui
import {SignUpPageForm} from '../SignUpPageForm/SignUpPageForm';
//assets
import AuthImg from "@/shared/libs/assets/svg/authImg.svg"
export const SignUpPage = () => {
    return (
        <>
            <section className={styles.wrapperSignUpPage}>
                <div className={styles.wrapperSignUpImg}>
                    <img src={AuthImg} alt="authImg" />
                </div>
                <div className={styles.wrapperSignUpForm}>
                    <SignUpPageForm /> 
                </div>
            </section>
        </>
    );
};
