import { ThemeProvider, Typography } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import FormHeader from 'components/atoms/FormHeader'
import { useInput } from 'hooks/useInput'
import { number } from 'prop-types'
import { ReactNode, useState } from 'react'
import { darktheme, GlobalStyle } from 'styles'
import TimeInput, { TimeInputProps } from '.'

export default {
  title: 'Molecules/TimeInput',
  component: TimeInput,
} as Meta

const testTimeInseconds = 3599

// eslint-disable-next-line react/function-component-definition
const Template: Story<TimeInputProps> = (args: TimeInputProps) => {
  const [timeInSeconds, setTimeInSeconds] = useState(testTimeInseconds)
  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <TimeInput
        timeInSeconds={timeInSeconds}
        setTimeInSeconds={setTimeInSeconds}
      />
      <FormHeader text={timeInSeconds.toString()} />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})

Default.args = {}
