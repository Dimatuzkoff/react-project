//react
import { useState } from 'react';
//styles
import styles from './SignUpPageForm.module.scss';

export const SignUpPageForm = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(true);
    return (
        <>
            <section className={styles.wrapperSignUpPageForm}>
               <h1>{isSignUp ? 'Зареєструватися' : 'Увійти' }</h1>
               <p>Введіть свої дані нижче</p>
            </section>
        </>
    );
};
