import { InputAdornment, TextField } from '@mui/material'
import Tags, { TagProps } from 'components/atoms/Tags'
import React, { } from 'react'

export interface TagInputProps {
    label?: string
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning'
    value: string
    tagProps: TagProps
    onKeyDown: (e: React.KeyboardEvent) => void
    onChange: (e: React.ChangeEvent) => void
}

export default function TagInput({ ...props }: TagInputProps) {
    return (
        <TextField
            color={props.color}
            value={props.value}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Tags {...props.tagProps} />
                    </InputAdornment>
                ),
            }}
            onChange={props.onChange}
            {...props}
        />
    )
}
