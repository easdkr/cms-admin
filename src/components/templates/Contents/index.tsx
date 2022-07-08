import ContentEditor from 'components/organisms/ContentEditor'
import ContentsCardList from 'components/organisms/ContentsCardList'
import useContents from './hooks/useContents'

function Contents() {
  const { dialogOpen, handleDialogClose, handleCardClick, selectedContentsId } =
    useContents()

  return (
    <>
      <ContentsCardList onCardClick={handleCardClick} />
      <ContentEditor
        open={dialogOpen}
        onClose={handleDialogClose}
        selectedContentsId={selectedContentsId}
      />
    </>
  )
}

export default Contents
