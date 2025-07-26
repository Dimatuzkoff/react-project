//react
import { useState } from 'react';
//libs
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
//type
import { signUpSchema, type SignUpSchemaType } from "@/widgets/auth/libs/model/type/signUpType"
//styles
import styles from './AuthForm.module.scss';
//ui
import { AuthFormSignUp } from '@/widgets/auth/ui/AuthFormSignUp/AuthFormSignUp'
import { AuthFormSignIn } from '@/widgets/auth/ui/AuthFormSignIn/AuthFormSignIn'
import { AuthFormToggleMode } from '@/widgets/auth/ui/AuthFormToggleMode/AuthFormToggleMode'


export const AuthForm = () => {
    const [authMode, setAuthMode] = useState<'signUp' | 'signIn'>('signUp');

    const methods = useForm<SignUpSchemaType>({
  resolver: zodResolver(signUpSchema),
  mode: 'onBlur',
});

    const onSubmit = async (data: any) => {
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
