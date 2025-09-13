// react
import { useContext } from 'react'
// provider
import { toastContext } from '@/app/providers/toast/toastProvider'

export const useToastNotification = () => useContext(toastContext)
