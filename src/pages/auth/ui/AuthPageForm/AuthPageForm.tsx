//react
import { useState } from 'react';
//libs
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
//type
import { signUpSchema, type SignUpSchemaType } from "@/widgets/signUp/libs/model/type/signUpType"
//styles
import styles from './AuthPageForm.module.scss';
//ui
import { SignUpForm } from '@/widgets/signUp'
import { SignInForm } from '@/widgets/signIn'
import { AuthPageFormToggleMode } from '../AuthPageFormToggleMode/AuthPageFormToggleMode'


export const AuthPageForm = () => {
    const [authMode, setAuthMode] = useState<string>('signUp');

    const methods = useForm<SignUpSchemaType>({
  resolver: zodResolver(signUpSchema),
  mode: 'onBlur',
});

    const onSubmit = async (data: any) => {
        alert(`${authMode === 'signUp' ? 'SignUp' : 'SignIn'}: ${JSON.stringify(data)}`);
        methods.reset();
    };

    return (
        <div className={styles.wrapperForm}>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {authMode === 'signUp' ? <SignUpForm /> : <SignInForm />}
                </form>
            </FormProvider>
            <AuthPageFormToggleMode setAuthMode={setAuthMode} authMode={authMode} />
        </div>
    );
};
