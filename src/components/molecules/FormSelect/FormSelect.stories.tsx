import { SelectChangeEvent, ThemeProvider } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import { CategoryDefaultData } from 'components/organisms/ContentEditor/ContentEditor.data'
import { Category } from 'models/contents'
import { ReactNode } from 'react'
import { darktheme, GlobalStyle } from 'styles'
import FormSelect, { FormSelectProps } from '.'

export default {
  title: 'Molecules/FormSelect',
  component: FormSelect,
} as Meta

const categories = CategoryDefaultData

// eslint-disable-next-line react/function-component-definition
const Template: Story<FormSelectProps<Category>> = (
  args: FormSelectProps<Category>,
) => {
  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: ReactNode,
  ) => {
    const index = categories.findIndex(i => i.name === event.target.value)
    console.log(JSON.stringify(categories[index], null, 2))
  }
  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <FormSelect onChange={handleChange} {...args} />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})

Default.args = {
  label: 'Categories',
  defaultValue: categories[0].name,
  items: categories,
}
