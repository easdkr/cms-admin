import { ThemeProvider } from '@mui/system'
import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { darktheme, GlobalStyle } from 'styles'
import Tags, { TagData, TagProps } from '.'
import { TagDatas } from './Tags.data'

export default {
    title: "Atoms/Tags",
    component: Tags
} as Meta


// eslint-disable-next-line react/function-component-definition
const Template : Story<TagProps> = args => {
    const [datas, setDatas] = useState<TagData[]>(TagDatas);

    return (
        <ThemeProvider theme={darktheme}>
            <GlobalStyle />
            <Tags datas={datas} setDatas={setDatas} {...args}/>
        </ThemeProvider>
    )
}

export const Default = Template.bind({})

