import type { Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps, ToastProvider } from '@willry/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Feedback/Toasts',
  component: Toast,
  args: {
    title: 'titulo',
    description: 'Descrição',
    open: false,
  },
} as Meta<ToastProps>

export const Primary = (args: ToastProps) => {
  const [_, updateArgs] = useArgs()
  const handleOpen = (status: boolean) => {
    updateArgs({ open: status })
  }

  return (
    <Box>
      <ToastProvider>
        <Button onClick={() => handleOpen(true)}>Abrir</Button>
        <Toast {...args} onOpenChange={handleOpen} />
      </ToastProvider>
    </Box>
  )
}

// export const Provider = (args: ToastProps) => {
//   const { openToast } = useContext(ToastContext)
//   return (
//     <Box>
//       <Button
//         onClick={() => openToast({ title: 'titulo', description: 'teste' })}
//       >
//         Abrir
//       </Button>
//     </Box>
//   )
// }

// Provider.decorators = [
//   (Story, data) => {
//     return (
//       <ToastProvider>
//         <Story />
//       </ToastProvider>
//     )
//   },
// ]
// Provider.parameters = { docs: { source: { type: 'code' } } }
