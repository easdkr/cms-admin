import { ThemeProvider } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import { CategoryDefaultData } from 'components/organisms/ContentDetails/ContentDetails.data'
import { Category } from 'models/contents'
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
  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <FormSelect {...args} />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})

Default.args = {
  label: 'Categories',
  defaultValue: categories[0].name,
  items: categories,
}
