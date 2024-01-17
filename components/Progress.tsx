import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Progress = () => {
  return (
    <Box  m='20px' height="50vh" width={'70vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <CircularProgress />
    </Box>
  )
}

export default Progress