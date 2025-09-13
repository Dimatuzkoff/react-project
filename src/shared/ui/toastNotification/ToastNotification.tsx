// react
import type { FC } from 'react';
//libs
import clsx from 'clsx';
// styles
import styles from './ToastNotification.module.scss';

interface ToastNotificationProps {
    text?: string,
    type?: 'success' | 'error' | 'warning',
}

export const ToastNotification: FC<ToastNotificationProps> = ({
    text = 'success',
    type ='success',
}) => {    
    return(
        <>
            <div className={ clsx(styles.toast, {
                    [styles.success]: type === 'success',
                    [styles.error]: type === 'error',
                    [styles.warning]: type === 'warning',
                }) }> 
                    <h4 className={styles.label}> { type } </h4>
                    <span className={styles.text}> { text } </span>
            </div>
        </>
    )
}