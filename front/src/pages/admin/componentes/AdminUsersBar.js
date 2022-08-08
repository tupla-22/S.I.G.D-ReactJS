import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link  from "../../../componentes/Link";

export default function AdminUsersBar() {
    const sx= {
        backgroundColor:"primary.second",
        display:"flex",
        alignItems:"center"
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={sx} position="static">
        <Toolbar>
        <Button color="inherit"><Link className="white" to="userAdd">Agregar</Link></Button>
        <Button color="inherit"><Link className="white" to="userUpdate">Actualizar</Link></Button>
        <Button color="inherit"><Link className="white" to="userDelete">Eliminar</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
