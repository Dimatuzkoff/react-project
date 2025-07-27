//styles
import styles from './AuthFormSignIn.module.scss';
//ui
import { AuthFormInput } from '@/widgets/auth/ui/AuthFormInput/AuthFormInput';
import { Button } from '@/shared/ui/Button';

export const AuthFormSignIn = () => {
    return (
        <div className={styles.wrapperSignIn}>
            <h1>Увійти</h1>
            <p>Введіть свої дані нижче</p>
            <div className={styles.inputWrapper}>
                <AuthFormInput
                   name='email'
                    isFullWidth
                    type="text"
                    size="32"
                    placeholder="Email"
                />
            </div>
            <div className={styles.inputWrapper}>
                <AuthFormInput
                    name='password'
                    isFullWidth
                    type="password"
                    size="32"
                    placeholder="Пароль"
                />
            </div>
            <Button type="submit" uiColor="warning">
                Увійти
            </Button>
        </div>
    );
};
