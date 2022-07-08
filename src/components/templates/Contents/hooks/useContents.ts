import { useState } from 'react'
import { UNSET } from 'utils/constants/Integers'

export default function useContents() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedContentsId, setSelectedContentsId] = useState<number>(UNSET)

  const openDialog = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const handleCardClick = (id: number) => {
    openDialog()
    setSelectedContentsId(id)
  }

  return {
    openDialog,
    dialogOpen,
    handleDialogClose,
    selectedContentsId,
    setSelectedContentsId,
    handleCardClick,
  }
}
