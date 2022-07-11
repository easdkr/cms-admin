import { ThemeProvider } from '@mui/system'
import { Meta, Story } from '@storybook/react'
import { darktheme, GlobalStyle } from 'styles'
import { useState } from 'react'
import { TagData, TagProps } from 'components/atoms/Tags'
import TagInput, { TagInputProps } from '.'
import { Box, Typography } from '@mui/material'

export default {
  title: 'Molecules/TagInput',
  component: TagInput,
} as Meta

// eslint-disable-next-line react/function-component-definition
const Template: Story<TagInputProps> = (args: any) => {
  const [sampleState, setSampleState] = useState({
    id: 1,
    tags: [
      { id: 0, data: 'Tag1' },
      { id: 1, data: 'Tag2' },
    ] as TagData[],
  })

  const onTagChange = (value: TagData[] | null) => {
    setSampleState(prev => ({ ...prev, tags: value }))
  }

  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <Box>
        <TagInput
          tagValue={sampleState.tags}
          {...args}
          onTagChange={onTagChange}
        />
        <Typography color={"#FFF"}>{JSON.stringify(sampleState.tags, null, 2)}</Typography>
      </Box>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})

Default.args = {
  color: 'primary',
  label: '태그',
}
