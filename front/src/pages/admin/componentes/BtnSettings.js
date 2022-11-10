

import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import { Button, IconButton } from '@mui/material';
import { BoxAlJusCen, BoxColCen } from '../../../componentes/styledComponents/ComponentesDeEstilos';

export default function BtnSettings({contenido=[]}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography >{contenido.map((e) => (e))}</Typography>
              
            </Paper>
          </Fade>
        )}
        </Popper>
      <IconButton onClick={handleClick('bottom')}><SettingsTwoToneIcon color="secondary" /></IconButton> 
          
    
    </>
    
  );
}