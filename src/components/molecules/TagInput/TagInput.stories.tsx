import { ThemeProvider } from '@mui/system'
import { Meta, Story } from '@storybook/react'
import { darktheme, GlobalStyle } from 'styles'
import { useState } from 'react'
import { TagData, TagProps } from 'components/atoms/Tags'
import TagInput, { TagInputProps } from '.'

export default {
  title: 'Molecules/TagInput',
  component: TagInput,
} as Meta

// eslint-disable-next-line react/function-component-definition
const Template: Story<TagInputProps> = (args: any) => {
  const [tags, setTags] = useState<TagData[]>([])

  const tagProps: TagProps = {
    size: 'small',
    datas: tags,
    setDatas: setTags,
  }

  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <TagInput {...args} tagProps={tagProps} />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})

Default.args = {
  color: 'primary',
  label: '태그',
}
