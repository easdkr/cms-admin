import React from 'react'
import useContentsCardList from './hooks/useContentsCardList'
import ContentsCardListView from './ContentsBrief.views'

export interface ContentsCardListProps {
  onCardClick: (id: number) => void
}

function ContentsCardList({ onCardClick }: ContentsCardListProps) {
  const { contentsBriefList } = useContentsCardList()
  return (
    <ContentsCardListView
      contents={contentsBriefList}
      onCardClick={onCardClick}
    />
  )
}

export default React.memo(ContentsCardList)
