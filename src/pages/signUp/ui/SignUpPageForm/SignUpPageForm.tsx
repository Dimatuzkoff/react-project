//react
import { useState } from 'react';
//styles
import styles from './SignUpPageForm.module.scss';
//ui
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button';

export const SignUpPageForm = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(true);

    const toggleAuthMode = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <>
            <div className={styles.wrapperSignUpPageForm}>
                <h1>{isSignUp ? 'Зареєструватися' : 'Увійти' }</h1>
                <p>Введіть свої дані нижче</p>
                { isSignUp && <div className={styles.inputWrapper}>
                    <Input isFullWidth type='text' size='32' placeholder="Ваше ім'я"/>
                </div>}
                <div className={styles.inputWrapper}>
                    <Input isFullWidth type='text' size='32' placeholder='Email або телефон'/>
                </div>
                <div className={styles.inputWrapper}>
                    <Input isFullWidth type='password' size='32' placeholder='Пароль'/>
                </div>
                <Button type="button" uiColor='warning'>{isSignUp ? 'Зареєструватися' : 'Увійти' }</Button>
                <div className={styles.authSwitch}>
                    <span className={styles.authSwitchText}>{isSignUp ? 'Вже маєте акаунт?' : 'Немає акаунту?' }</span>
                    <span className={styles.authSwitchAction} onClick={toggleAuthMode}>{isSignUp ? 'Увійти' : 'Зареєструватися' }</span>
                </div>
            </div>
        </>
    );
};
