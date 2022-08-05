import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ButtonClassic from "../../../componentes/ButtonClassic";
import "./styles/UserAddForm.css";
import UserAddTipeController from "./UserAddTipeController";
const UserAddForm = () => {
  const [tipoUsuario, setTipoUsuario] = useState("");

  const handleChange = (event) => {
    setTipoUsuario(event.target.value);
  };

  const sxForm = {};

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      className="userAddForm"
    >
      <h3>Agregar un usuario</h3>
      <TextField variant="standard" label="Nombres"></TextField>
      <TextField variant="standard" label="Apellidos"></TextField>
      <TextField variant="standard" label="cédula de identidad"></TextField>
      <TextField variant="standard" label="Fecha de nacimiento"></TextField>
      <TextField variant="standard" label="Email"></TextField>
      <TextField variant="standard" label="Telefono"></TextField>
      <TextField variant="standard" type="number" label="Edad"></TextField>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tipo de usuario</InputLabel>
        <Select
          label="Tipo de usuario"
          value={tipoUsuario}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value="admin">Administrador</MenuItem>
          <MenuItem value="student">Estudiante</MenuItem>
          <MenuItem value="juzge">Juez</MenuItem>
          <MenuItem value="analist">Analista</MenuItem>
          <MenuItem value="scout">Ojeador</MenuItem>
        </Select>
      </FormControl>
      <UserAddTipeController tipeUser={tipoUsuario}/>
      <ButtonClassic>Agregar</ButtonClassic>
    </form>
  );
};

export default UserAddForm;
