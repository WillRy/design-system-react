import { createContext, ReactNode, useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { ToastViewport } from '../components/Toast/styles'
import { Toast } from '../components/Toast'

interface ToasType {
  id: string
  title: string
  description: string
}

interface openToastProps {
  title: string
  description: string
}

interface ToastContextInterface {
  toasts: ToasType[]
  openToast: ({ title, description }: openToastProps) => void
}
export const ToastContext = createContext({} as ToastContextInterface)

interface ToastProviderProps {
  children: ReactNode
}
export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToasType[]>([])

  function openToast({ title, description }: openToastProps) {
    setToasts((state) => [
      ...state,
      {
        id: Math.random().toString(36).substr(2, 9),
        title,
        description,
      },
    ])
  }

  function onStatusChange(status: boolean, id: string) {
    if (!status) {
      const toastWithoutClosed = toasts.filter((toast) => toast.id !== id)
      setToasts(toastWithoutClosed)
    }
  }

  return (
    <ToastContext.Provider value={{ openToast, toasts }}>
      <ToastPrimitive.Provider>
        {children}

        {toasts.map((toast, index) => {
          return (
            <Toast
              key={toast.id}
              title={toast.title}
              description={toast.description}
              open={true}
              onOpenChange={(status) => onStatusChange(status, toast.id)}
            />
          )
        })}

        <ToastViewport />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  )
}

interface ToastContainerProps {
  children: ReactNode
}
export function ToastContainer({ children }: ToastContainerProps) {
  return <ToastProvider>{children}</ToastProvider>
}
