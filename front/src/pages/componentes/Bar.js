import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../../media/icons/logo_small.png";
import "./styles/bar.css"
import NavLink from '../../componentes/NavLink';
import EngOrSpan from '../../componentes/EngOrSpan';
import LanguajeContext from '../../contexts/LanguajeContext';

export default function Bar() {

  const { text } =
    React.useContext(LanguajeContext)


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
          
          <img alt="LOGO" className="logoBar" src={logo}></img>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit"><NavLink  to="">{text.inicio}</NavLink></Button>
          <Button color="inherit"><NavLink to="help">{text.ayuda}</NavLink></Button>
          <Button color="inherit"><NavLink to="login">{text.entrar}</NavLink></Button>
          <EngOrSpan/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
