import { Box, ButtonBaseProps, FormHelperText, Typography } from '@mui/material'
import { AddToPhotos, Label } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import Strings from 'utils/constants/strings'
import {
  ImageBackdrop,
  ImageButton,
  ImageSrc,
  InvisibleBox,
  IconStyles,
} from './styles'
import useThumbnailButton from './useThumbnailButton'

export interface ThumbnailButtonProps extends ButtonBaseProps {
  onFileChange?: (file: File) => void
}
export default function ThumbnailButton({
  onFileChange,
  ...buttonBaseProps
}: ThumbnailButtonProps) {
  const { clickRef, onClick, onChange, file, preview } =
    useThumbnailButton(onFileChange)

  return (
    <Box>
      <FormHelperText color="action">
        {Strings.contents.THUMBNAIL_LABEL}
      </FormHelperText>
      <Box>
        <ImageButton focusRipple {...buttonBaseProps} onClick={onClick}>
          <ImageSrc style={{ backgroundImage: file && `url(${preview})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <AddToPhotos color="action" sx={IconStyles} fontSize="large" />
        </ImageButton>
      </Box>

      <InvisibleBox>
        <input
          type="file"
          accept="image/*"
          ref={clickRef}
          onChange={onChange}
        />
      </InvisibleBox>
    </Box>
  )
}
