import React from 'react';
import {Alert,Stack} from '@mui/material';


export const AlertPopUp = ({severity="success",children}) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity={severity}>{children}</Alert>
  </Stack>
  )
}
