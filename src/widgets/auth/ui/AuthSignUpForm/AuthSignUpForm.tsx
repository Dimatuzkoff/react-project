import { useFormContext } from 'react-hook-form';
//styles
import styles from './AuthSignUpForm.module.scss';
//ui
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button';
export const AuthSignUpForm = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className={styles.wrapperSignUp}>
            <h1>Зареєструватися</h1>
            <p>Введіть свої дані нижче</p>
            <div className={styles.inputWrapper}>
                <Input
                    {...register('firstName')}
                    isError={!!errors.firstName}
                    helperText={errors.firstName?.message?.toString()}
                    isFullWidth
                    type="text"
                    size="32"
                    placeholder="Ваше ім'я"
                />
            </div>
            <div className={styles.inputWrapper}>
                <Input
                    {...register('email')}
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
                    {...register('password')}
                    isError={!!errors.password}
                    helperText={errors.password?.message?.toString()}
                    isFullWidth
                    type="password"
                    size="32"
                    placeholder="Пароль"
                />
            </div>
            <Button type="submit" uiColor="warning">
                Зареєструватися
            </Button>
        </div>
    );
};
