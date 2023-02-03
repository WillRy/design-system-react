import type { Meta, Story } from '@storybook/react'
import {
  Box,
  Button,
  ToastContext,
  ToastProps,
  ToastProvider,
} from '@willry/react'
import { useContext } from 'react'

export default {
  title: 'Feedback/ToastProvider',
  component: ToastProvider,
} as Meta<ToastProps>

export const Provider = () => {
  const { openToast } = useContext(ToastContext)
  return (
    <Box>
      <Button
        onClick={() => openToast({ title: 'titulo', description: 'teste' })}
      >
        Abrir
      </Button>
    </Box>
  )
}
Provider.decorators = [
  (Story: Story) => {
    return (
      <ToastProvider>
        <Story />
      </ToastProvider>
    )
  },
]
Provider.parameters = { docs: { source: { type: 'code' } } }
