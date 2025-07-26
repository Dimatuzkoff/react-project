import { useFormContext } from 'react-hook-form';
//styles
import styles from './AuthFormSignIn.module.scss';
//ui
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button';
//constants
import { EMAIL_REGEX } from '@/shared/libs/constants/digit';

export const AuthFormSignIn = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className={styles.wrapperSignIn}>
            <h1>Увійти</h1>
            <p>Введіть свої дані нижче</p>
            <div className={styles.inputWrapper}>
                <Input
                    {...register('email', {
                        required: "Це поле обов'язкове",
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'Невірний формат електронної пошти',
                        },
                        setValueAs: (v: string) => v.trim(),
                    })}
                    isError={!!errors.email}
                    helperText={errors.email?.message?.toString()}
                    isFullWidth
                    type="text"
                    size="32"
                    placeholder="Email або телефон"
                />
            </div>
            <div className={styles.inputWrapper}>
                <Input
                    {...register('password', {
                        required: "Це поле обов'язкове",
                        minLength: {
                            value: 4,
                            message: 'Мінімум 4 символи',
                        },
                        setValueAs: (v: string) => v.trim(),
                    })}
                    isError={!!errors.password}
                    helperText={errors.password?.message?.toString()}
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
