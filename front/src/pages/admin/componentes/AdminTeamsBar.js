import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link  from "../../../componentes/Link";

export default function AdminTeamsBar() {
    const sx= {
        backgroundColor:"primary.second",
        display:"flex",
        alignItems:"center"
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={sx}>
        <Toolbar sx={sx}>
        <Button color="inherit"><Link className="white" to="teamAdd">Agregar</Link></Button>
        <Button color="inherit"><Link className="white" to="teamUpdate">Actualizar</Link></Button>
        <Button color="inherit"><Link className="white" to="teamDelete">Eliminar</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
