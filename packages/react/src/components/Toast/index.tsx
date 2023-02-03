import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps, ElementType, ReactNode } from 'react'
import {
  CloseButton,
  Header,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from './styles'

interface ToastType {
  title?: string
  description: string
  children?: ReactNode
  open?: boolean
  onOpenChange: (status: boolean) => void
}

export function Toast({
  title,
  description,
  children,
  open = false,
  onOpenChange,
  ...props
}: ToastType) {
  function onStatusChange(status: boolean) {
    onOpenChange(status)
  }
  return (
    <ToastRoot
      {...props}
      onOpenChange={onStatusChange}
      open={open}
      duration={999999}
    >
      <Header>
        {title && <ToastTitle>{title}</ToastTitle>}
        <ToastPrimitive.Close asChild>
          <CloseButton>
            <X weight="bold" size={20} />
          </CloseButton>
        </ToastPrimitive.Close>
      </Header>

      <ToastDescription>{description}</ToastDescription>
    </ToastRoot>
  )
}

export interface ToastProps extends ComponentProps<typeof Toast> {
  as?: ElementType
}

Toast.displayName = 'Toast'
