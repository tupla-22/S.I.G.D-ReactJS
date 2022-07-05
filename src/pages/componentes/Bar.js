import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../../media/icons/logo.png"
import "./styles/bar.css"
import NavLink from '../../componentes/NavLink';
export default function Bar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          
          <img src={logo} className="logo"></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            S.I.G.D.
          </Typography>
          <Button color="inherit"><NavLink to="help">AYUDA</NavLink></Button>
          <Button color="inherit"><NavLink to="">LOGIN</NavLink></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
