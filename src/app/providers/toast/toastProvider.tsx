// react
import { createContext, useState } from "react";
// ui
import { ToastNotification } from '@/shared/ui/toastNotification'
// styles
import styles from '@/shared/ui/toastNotification/ToastNotification.module.scss';

interface IToast {
    id: string,
    message: string,
    type: 'success' | 'error' | 'warning'
}

interface ToastContextType {
  addToast: (message: string, type?: 'success' | 'error' | 'warning') => void;
}

export const toastContext = createContext()

export const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);

    const removeToast = (id: string) => {
        setToasts(prevState => prevState.filter(toast => toast.id !== id))
    }
    const addToast = (message: string, type = 'success') => {
        const id = Date.now().toString()
        setToasts(prevState => [{id, message, type}, ...prevState])
        setTimeout(() => removeToast(id), 4000)
    }
    return(
        <toastContext.Provider value={{addToast}}>
            {children}
            <div className={ styles.notifications }>
                { toasts.map(toast => (
                    <ToastNotification key={ toast.id } text={toast.message} type={toast.type}/>
                ))

                }
            </div>
        </toastContext.Provider>
    )
}