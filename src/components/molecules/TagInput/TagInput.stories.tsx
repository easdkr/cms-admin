import { ThemeProvider } from '@mui/system'
import { Meta, Story } from '@storybook/react'
import { darktheme, GlobalStyle } from 'styles'
// import TagInput, { ChipProps } from '.'
import { useInput } from 'hooks/useInput'
import { useState } from 'react'

export default {
  title: 'Molecules/TagInput',
  // component: TagInput,
} as Meta

// const Template: Story<any> = () => {
//   const input = useInput('')
//   const [tags, setTags] = useState<string[]>([])

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key == 'Enter') handleEnterKeyDown()
//     else if (e.key == 'Backspace') handleBackspace()
//   }

//   const handleEnterKeyDown = () => {
//     setTags([...tags, input.value])
//     input.reset()
//   }

//   const handleBackspace = () => {
//     if (input.isEmpty()) {
//       popTags()
//     }
//   }

//   const popTags = () => {
//     tags.pop()
//     setTags([...tags])
//   }

//   const chipProps = {
//     color: 'primary',
//     size: 'small',
//     onDelete: (item: string) => {
//       tags.splice(tags.indexOf(item), 1)
//       setTags([...tags])
//     },
//   } as ChipProps

//   return (
//     <ThemeProvider theme={darktheme}>
//       <div>
//         <GlobalStyle />
//         <TagInput
//           color="success"
//           label={'tags'}
//           onKeyDown={handleKeyDown}
//           value={input.value}
//           onChange={input.onChange}
//           tags={tags}
//           chipProps={chipProps}
//         />
//       </div>
//     </ThemeProvider>
//   )
// }

// export const Default = Template.bind({})
