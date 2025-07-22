//react
import { useForm, type FieldValues } from 'react-hook-form';
//styles
import styles from './SignUpForm.module.scss';
//ui
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button';
//constants
import {EMAIL_REGEX} from '@/shared/libs/constants/digit'

export const SignUpForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors},
        reset,
    } = useForm({
        mode: "onBlur",});

    const onSubmit = async (data: FieldValues) => {
  alert("SignUp: " + JSON.stringify(data));
    reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapperSignUp}>
                <h1>Зареєструватися</h1>
                <p>Введіть свої дані нижче</p>
                <div className={styles.inputWrapper}>
                    <Input { ...register("firstName", { 
                        required: "Це поле обов'язкове",
                        minLength: {
                            value: 2,
                            message: "Мінімум 2 символи",
                        },
                        setValueAs: (value: string) => value.trim(),
                        })} isError={!!errors.firstName} helperText={ errors.firstName && String(errors.firstName.message)} isFullWidth type='text' size='32' placeholder="Ваше ім'я"/>
                </div>
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
                <Button type="submit" uiColor='warning'>Зареєструватися</Button>
            </form>
        </>
    );
};
