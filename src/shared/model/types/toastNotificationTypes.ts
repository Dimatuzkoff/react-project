export interface IToast {
    id: string,
    message: string,
    type: 'success' | 'error' | 'warning',
    duration: number
}

export interface ToastContextType {
  addToast: (message: string, type?: 'success' | 'error' | 'warning', duration?: number) => void;
}