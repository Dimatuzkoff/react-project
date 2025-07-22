//react
import { useForm, type FieldValues } from 'react-hook-form';
//styles
import styles from './SignInForm.module.scss';
//ui
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button';
//constants
import {EMAIL_REGEX} from '@/shared/libs/constants/digit'

export const SignInForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors},
        reset,
    } = useForm({
        mode: "onBlur",});

    const onSubmit = async (data: FieldValues) => {
  alert("SignIn: " + JSON.stringify(data));
    reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapperSignIn}>
                <h1>Увійти</h1>
                <p>Введіть свої дані нижче</p>
                <div className={styles.inputWrapper}>
                    <Input { ...register("email", { 
                        required: "Це поле обов'язкове",
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'Невірний формат електронної пошти',
                        },
                        setValueAs: (value: string) => value.trim(),
                        })} isError={!!errors.email} helperText={ errors.email && String(errors.email.message)} isFullWidth type='text' size='32' placeholder='Email або телефон'/>
                </div>
                <div className={styles.inputWrapper}>
                    <Input { ...register("password", { 
                        required: "Це поле обов'язкове",
                        minLength: {
                            value: 4,
                            message: "Мінімум 4 символи",
                        }, 
                        setValueAs: (value: string) => value.trim(), 
                        })} isError={!!errors.password} helperText={ errors.password && String(errors.password.message)} isFullWidth type='password' size='32' placeholder='Пароль'/>
                </div>
                <Button type="submit" uiColor='warning'>Увійти</Button>
            </form>
        </>
    );
};
