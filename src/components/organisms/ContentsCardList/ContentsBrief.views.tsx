import { Box } from '@mui/material'
import MediaCard from 'components/molecules/MediaCard'
import { Content } from 'models/contents'
import { ContentsLayoutStyle } from './styles'

export interface ContentsBriefProps {
  contents: Content[]
  onCardClick: (id: number) => void
}

export default function ContentsCardListView({
  contents,
  onCardClick,
}: ContentsBriefProps) {
  return (
    <Box sx={ContentsLayoutStyle}>
      {contents.map(item => (
        <MediaCard
          imageSource={item.banner}
          title={item.title}
          key={`Card, ${item.id}`}
          onClick={() => {
            onCardClick(item.id)
          }}
        />
      ))}
    </Box>
  )
}
