// react
import type { FC } from 'react';
//libs
import clsx from 'clsx';
// styles
import styles from './ToastNotification.module.scss';

interface ToastNotificationProps {
    text?: string,
    type?: 'success' | 'error' | 'warning',
    duration?: number;
}

export const ToastNotification: FC<ToastNotificationProps> = ({
    text = 'success',
    type ='success',
    duration = 3,
}) => {    
    return(
        <>
            <div className={ clsx(styles.toast, {
                    [styles.success]: type === 'success',
                    [styles.error]: type === 'error',
                    [styles.warning]: type === 'warning',
                }) } 
                style={{ animation: `
                    ${styles.show} 0.3s ease forwards,
                    ${styles.gradientFill} 1s linear forwards,
                    ${styles.fadeOut} 1s linear forwards ${duration}s
                    `}}
            > 
                <h4 className={styles.label}> { type } </h4>
                <span className={styles.text}> { text } </span>
            </div>
        </>
    )
}