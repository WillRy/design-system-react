import { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@willry/react'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    content: 'Um tooltip qualquer',
    children: <Button>Send</Button>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
