//react
import { type Dispatch, type SetStateAction } from 'react';
//styles
import styles from './AuthFormToggleMode.module.scss';

interface AuthFormToggleModeProps {
    authMode: 'signUp' | 'signIn';
    setAuthMode: Dispatch<SetStateAction<'signUp' | 'signIn'>>;
}
export const AuthFormToggleMode = ({
    authMode,
    setAuthMode
}: AuthFormToggleModeProps) => {
    const toggleAuthMode = () => {
        setAuthMode(authMode === 'signUp' ? 'signIn' : 'signUp');
    };
    return (
        <>
            <div className={styles.authSwitch}>
                <span className={styles.authSwitchText}>{authMode === 'signUp' ? 'Вже маєте акаунт?' : 'Немає акаунту?' }</span>
                <span className={styles.authSwitchAction} onClick={toggleAuthMode}>{authMode === 'signUp' ? 'Увійти' : 'Зареєструватися' }</span>
            </div> 
        </>
    );
};
