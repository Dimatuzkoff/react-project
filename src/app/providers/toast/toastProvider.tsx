// react
import { createContext, useState, type ReactNode, type FC } from "react";
// ui
import { ToastNotification } from '@/shared/ui/toastNotification'
// styles
import styles from '@/shared/ui/toastNotification/ToastNotification.module.scss';
// types
import { type IToast, type ToastContextType } from '@/shared/model/types/toastNotificationTypes'

interface ToastProviderProps {
  children: ReactNode;
}

export const toastContext = createContext<ToastContextType>({
  addToast: () => {},
});

export const ToastProvider: FC<ToastProviderProps> = ({children}) => {
    const [toasts, setToasts] = useState<IToast[]>([]);

    const removeToast = (id: string) => {
        setToasts(prevState => prevState.filter(toast => toast.id !== id))
    }

    const addToast = (message: string, type: "success" | "error" | "warning" = "success") => {
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