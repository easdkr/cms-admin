import ContentsDetails from 'components/organisms/ContentDetails'
import Contents from 'components/templates/Contents'
import useContentDetails from 'hooks/useContentDetails'
import useContents from 'hooks/useContents'

export default function ContentsPage() {
  const { contents, openModal, handleModalClose, modalOpen } = useContents()

  const {
    categories,
    contentDetailsData,
    handleGetContentDetails,
    selectedCategory,
    setSelectedCategory,
  } = useContentDetails()

  const onCardClick = async (id: number) => {
    await handleGetContentDetails(id)
    openModal()
  }

  return (
    <>
      <Contents onCardClick={onCardClick} contents={contents} />

      {/* <ContentsDetails
        contentDetailsData={contentDetailsData}
        open={modalOpen}
        onClose={handleModalClose}
        categories={categories}
        selectedCateory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      /> */}
    </>
  )
}
