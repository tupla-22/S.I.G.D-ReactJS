import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

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
          <Button color="inherit">Agregar</Button>
          <Button color="inherit">Eliminar</Button>
          <Button color="inherit">Actualizar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
