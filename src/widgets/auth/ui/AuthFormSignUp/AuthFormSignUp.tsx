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
                    isFullWidth
                    type="text"
                    size="32"
                    placeholder="Ваше ім'я"
                    name='firstName'
                />
            </div>
            <div className={styles.inputWrapper}>
                <AuthFormInput
                    isFullWidth
                    type="text"
                    size="32"
                    placeholder="Email"
                    name='email'
                />
            </div>
            <div className={styles.inputWrapper}>
                <AuthFormInput
                    isFullWidth
                    type="password"
                    size="32"
                    placeholder="Пароль"
                    name='password'
                />
            </div>
            <div className={styles.inputWrapper}>
                <AuthFormInput
                    isFullWidth
                    type="password"
                    size="32"
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
