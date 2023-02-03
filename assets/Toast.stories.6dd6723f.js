var p=Object.defineProperty;var t=(o,r)=>p(o,"name",{value:r,configurable:!0});import{d as s,B as c,e as d,a as l}from"./index.42ec0a29.js";import{j as n,a as u}from"./jsx-runtime.05841d8d.js";import{ao as m}from"./iframe.0a93fffe.js";import"./index.e4822ec8.js";import"./index.75515ce5.js";const f={parameters:{storySource:{source:`import type { Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps, ToastProvider } from '@willry/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Feedback/Toasts',
  component: Toast,
  args: {
    title: 'titulo',
    description: 'Descri\xE7\xE3o',
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
`,locationsMap:{primary:{startLoc:{col:23,line:15},endLoc:{col:1,line:29},startBody:{col:23,line:15},endBody:{col:1,line:29}}}}},title:"Feedback/Toasts",component:s,args:{title:"titulo",description:"Descri\xE7\xE3o",open:!1}},h=t(o=>{const[r,a]=m(),e=t(i=>{a({open:i})},"handleOpen");return n(c,{children:u(d,{children:[n(l,{onClick:()=>e(!0),children:"Abrir"}),n(s,{...o,onOpenChange:e})]})})},"Primary"),v=["Primary"];export{h as Primary,v as __namedExportsOrder,f as default};
//# sourceMappingURL=Toast.stories.6dd6723f.js.map
