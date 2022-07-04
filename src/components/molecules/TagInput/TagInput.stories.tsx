import { ThemeProvider } from '@mui/system'
import { Meta, Story } from '@storybook/react'
import { darktheme, GlobalStyle } from 'styles'
import { useInput } from 'hooks/useInput'
import { useState } from 'react'
import { TagData, TagProps } from 'components/atoms/Tags'
import TagInput, { TagInputProps } from '.'

export default {
  title: 'Molecules/TagInput',
  component: TagInput,
} as Meta

// eslint-disable-next-line react/function-component-definition
const Template: Story<TagInputProps> = (args: any) => {
  const input = useInput('')
  const [tags, setTags] = useState<TagData[]>([])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleEnterKeyDown()
    else if (e.key === 'Backspace') handleBackspace()
  }

  const handleEnterKeyDown = () => {
    const newTag : TagData = {
      id: tags.length,
      data : input.value
    }
    setTags([...tags, newTag])
    input.reset();
  }

  const handleBackspace = () => {
    if (input.isEmpty()) {
      popTags()
    }
  }

  const popTags = () => {
    tags.pop()
    setTags([...tags])
  }

  const tagProps : TagProps = {
    size: 'small',
    datas: tags,
    setDatas: setTags
  } 

  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <TagInput
        {...args}
        value={input.value}
        onKeyDown={handleKeyDown}
        onChange={input.onChange}
        tagProps={tagProps}
      />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})

Default.args={
  color: "primary",
  label: "태그"
}