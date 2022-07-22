import { Box, ThemeProvider } from '@mui/system'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { useState } from 'react'
import { darktheme } from 'styles'
import LinearProgressWithLabel from '.'

export default {
  title: 'Molecules/LinearProgressWithLabel',
  component: LinearProgressWithLabel,
} as Meta

// eslint-disable-next-line react/function-component-definition
const Template: Story = () => {
  const [progress, setProgress] = useState<number>(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress >= 100 ? 10 : prevProgress + 10,
      )
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <ThemeProvider theme={darktheme}>
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel color="inherit" value={progress} />
      </Box>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
