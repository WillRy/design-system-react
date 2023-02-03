var a=Object.defineProperty;var r=(o,s)=>a(o,"name",{value:s,configurable:!0});import{e,f as i,B as c,a as d}from"./index.42ec0a29.js";import{r as p}from"./index.e4822ec8.js";import{j as t}from"./jsx-runtime.05841d8d.js";import"./index.75515ce5.js";import"./iframe.0a93fffe.js";const v={parameters:{storySource:{source:`import type { Meta, Story } from '@storybook/react'
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
`,locationsMap:{provider:{startLoc:{col:24,line:16},endLoc:{col:1,line:27},startBody:{col:24,line:16},endBody:{col:1,line:27}}}}},title:"Feedback/ToastProvider",component:e},n=r(()=>{const{openToast:o}=p.exports.useContext(i);return t(c,{children:t(d,{onClick:()=>o({title:"titulo",description:"teste"}),children:"Abrir"})})},"Provider");n.decorators=[o=>t(e,{children:t(o,{})})];n.parameters={docs:{source:{type:"code"}}};const y=["Provider"];export{n as Provider,y as __namedExportsOrder,v as default};
//# sourceMappingURL=ToastProvider.stories.35ba57eb.js.map
