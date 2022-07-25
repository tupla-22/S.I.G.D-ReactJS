import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function EquiposBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"primary.second"}}>
        <Toolbar>
        <Button color="inherit" onClick={()=>{navigate("myTeam")}}>Mi equipo</Button>
        <Button color="inherit" onClick={()=>{navigate("teamsAll")}}>Equipos</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
