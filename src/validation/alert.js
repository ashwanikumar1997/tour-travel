import React from 'react';
import {Alert,Stack} from '@mui/material';


export const AlertPopUp = ({text}) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
    {/* <Alert severity="error">This is an error alert — check it out!</Alert>
    <Alert severity="warning">This is a warning alert — check it out!</Alert>
    <Alert severity="info">This is an info alert — check it out!</Alert> */}
    <Alert severity="success">{text}</Alert>
  </Stack>
  )
}
