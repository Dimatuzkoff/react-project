//react
import { useState } from 'react';
//libs
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
//type
import { signUpSchema, signInSchema, type AuthSchemaType } from "@/widgets/auth/libs/validation/authValidation"
//styles
import styles from './AuthForm.module.scss';
//ui
import { AuthFormSignUp } from '@/widgets/auth/ui/AuthFormSignUp/AuthFormSignUp'
import { AuthFormSignIn } from '@/widgets/auth/ui/AuthFormSignIn/AuthFormSignIn'
import { AuthFormToggleMode } from '@/widgets/auth/ui/AuthFormToggleMode/AuthFormToggleMode'

export const AuthForm = () => {
    const [authMode, setAuthMode] = useState<'signUp' | 'signIn'>('signUp');
    const methods = useForm<AuthSchemaType>({
        resolver: zodResolver(authMode === 'signUp' ? signUpSchema : signInSchema),
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });
    const onSubmit = async (data: AuthSchemaType) => {
        alert(`${authMode === 'signUp' ? 'signUp' : 'signIn'}: ${JSON.stringify(data)}`);
        methods.reset();
    };
    return (
        <div className={styles.wrapperForm}>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {authMode === 'signUp' ? <AuthFormSignUp /> : <AuthFormSignIn />}
                </form>
            </FormProvider>
            <AuthFormToggleMode setAuthMode={setAuthMode} authMode={authMode} />
        </div>
    );
};
