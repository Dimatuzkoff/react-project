//styles
import styles from './AuthFormSignUp.module.scss';
//ui
import { AuthFormInput } from '@/widgets/auth/ui/AuthFormInput/AuthFormInput';
import { Button } from '@/shared/ui/Button';

export const AuthFormSignUp= () => {
    return (
        <div className={styles.wrapperSignUp}>
            <h1>Зареєструватися</h1>
            <p>Введіть свої дані нижче</p>
            <div className={styles.inputWrapper}>
                <AuthFormInput
                    type="text"
                    placeholder="Ваше ім'я"
                    name='firstName'
                />
            </div>
            <div className={styles.inputWrapper}>
                <AuthFormInput
                    type="text"
                    placeholder="Email"
                    name='email'
                />
            </div>
            <div className={styles.inputWrapper}>
                <AuthFormInput
                    type="password"
                    placeholder="Пароль"
                    name='password'
                />
            </div>
            <div className={styles.inputWrapper}>
                <AuthFormInput
                    type="password"
                    placeholder="Підтвердіть пароль"
                    name='confirmPassword'
                />
            </div>
            <Button type="submit" uiColor="warning">
                Зареєструватися
            </Button>
        </div>
    );
};
