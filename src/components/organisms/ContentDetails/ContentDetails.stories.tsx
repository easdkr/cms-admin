import { SelectProps, TextFieldProps, ThemeProvider } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import { FormSelectProps } from 'components/molecules/FormSelect'
import { useInput } from 'hooks/useInput'
import { Category } from 'models/contents'
import { darktheme, GlobalStyle } from 'styles'
import ContentsDetails, { ContentsDetailsProps } from '.'
import {
  CategoryDefaultData,
  ContentDetailsDefaultData,
} from './ContentDetails.data'

export default {
  title: 'Organisms/ContentsDetails',
  component: ContentsDetails,
} as Meta

const contentDetailsData = ContentDetailsDefaultData
const categories = CategoryDefaultData

// eslint-disable-next-line react/function-component-definition
const Template: Story<ContentsDetailsProps> = args => {
  const categoryInput = useInput(contentDetailsData.category.name)
  const titleInput = useInput(contentDetailsData.title)

  const categoryProps: FormSelectProps<Category> = {
    label: 'category',
    defaultValue: contentDetailsData.category.name,
    value: categoryInput.value,
    onChange: categoryInput.onChange,
    items: categories,
  }

  const titleProps: TextFieldProps = {
    label: 'title',
    defaultValue: contentDetailsData.title,
    value: titleInput.value,
    onChange: titleInput.onChange,
  }

  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <ContentsDetails
        {...args}
        categoryProps={categoryProps}
        titleProps={titleProps}
      />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})

Default.args = {
  open: true,
  contentDetailsData,
  categories,
}
