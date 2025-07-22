//react
import { useState } from 'react';
//styles
import styles from './AuthPageForm.module.scss';
//ui
import { SignUpForm } from '@/widgets/signUp'
import { SignInForm } from '@/widgets/signIn'
import { AuthPageFormToggleMode } from '../AuthPageFormToggleMode/AuthPageFormToggleMode'


export const AuthPageForm = () => {
    const [authMode, setAuthMode] = useState<string>('signUp');
    return (
        <>
            <div className={styles.wrapperForm}>
                { authMode === 'signUp' ? <SignUpForm /> : <SignInForm />}
                <AuthPageFormToggleMode setAuthMode={setAuthMode} authMode={authMode}/>
            </div>
        </>
    );
};
