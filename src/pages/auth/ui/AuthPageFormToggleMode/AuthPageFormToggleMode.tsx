//react
import { type Dispatch, type SetStateAction } from 'react';
//styles
import styles from './AuthPageFormToggleMode.module.scss';

interface AuthPageFormToggleModeProps {
    authMode: string;
    setAuthMode: Dispatch<SetStateAction<string>>;
}
export const AuthPageFormToggleMode = ({
    authMode,
    setAuthMode
}: AuthPageFormToggleModeProps) => {
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
