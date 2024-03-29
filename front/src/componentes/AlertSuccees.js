import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import LanguajeContext from '../contexts/LanguajeContext';
import { useState, useEffect } from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertSuccees({children,severity,setOk,ok}) {
    const [open, setOpen] = React.useState(true);
    
    const {text} = React.useContext(LanguajeContext)

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
  
    setTimeout(() => {
      if (ok) setOk(false)
      else setOk(true)
    },5000)
}, [ok]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity || "success"} sx={{ width: '100%' }}>
          {severity=="error" ?( text.error) : (text.accionLograda)}  
        </Alert>
      </Snackbar>
    </Stack>
  );
}