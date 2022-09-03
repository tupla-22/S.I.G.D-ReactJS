import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ButtonClassic } from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import InputFechaNacimiento from "../../../componentes/InputFechaNacimiento";
import "./styles/UserAddForm.css";
import UserAddTipeController from "./UserAddTipeController";
import React, { useState, useEffect } from "react";
import { helpHttp } from "../../../helpers/helpHttp";

const UserAddForm = () => {
  const [userForm, setUserForm] = useState({});
  

  const handleClick = () => {
    const userAdd = async () => {

      const datos = {
        ci_usuario:12333893,
        primerNombre_usuario: "lombardo",
        primerApellido_usuario:"POrta",
        email_usuario:"luasdfasdfasdfa@gmail.com",
        fechaNac_usuario:"1999-9-5",
        contrasenna_usuario:"Luiausdfaf"

      }

      const ciuser = parseInt(userForm.ci_usuario);
      setUserForm({...userForm,ci_usuario:ciuser}); 
      
        const data = {
        method: "POST",
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(datos),
      };

     let response = await fetch("http://apirest.com/usuarios", data).then(e=>e).then(e=>console.log(e)).catch(e=>console.error(e.body));
      console.log(response)
    };
    userAdd();
  };

  const handleChange = (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
    console.log(userForm);
  };

  const sxForm = {};

  return (
    <Form
      style={{ display: "flex", flexDirection: "column" }}
      className="userAddForm"
    >
      <h3>Agregar un usuario</h3>
      <TextField
        onChange={handleChange}
        name="ci_usuario"
        type="number"
        className="Form__input"
        label="Cédula de identidad"
      ></TextField>
      <TextField
        onChange={handleChange}
        name="primerNombre_usuario"
        className="Form__input"
        label="Nombre"
      ></TextField>
      <TextField
        onChange={handleChange}
        name="primerApellido_usuario"
        className="Form__input"
        label="Apellido"
      ></TextField>
      <InputFechaNacimiento userForm={userForm} setUserForm={setUserForm} />
      <TextField
        onChange={handleChange}
        name="email_usuario"
        className="Form__input"
        label="Email"
      ></TextField>
      {/* <TextField onChange={handleChange} name="tel" type="number" className="Form__input" label="Telefono"></TextField> */}
      <TextField
        onChange={handleChange}
        name="contrasenna_usuario"
        className="Form__input"
        type="password"
        label="Contraseña"
      ></TextField>
      <TextField
        onChange={handleChange}
        name="contrasenna_usuario_ferified"
        className="Form__input"
        type="password"
        label="Repita contraseña"
      ></TextField>

      <FormControl className="Form__input">
        <InputLabel id="demo-simple-select-label">Tipo de usuario</InputLabel>
        <Select
          name="tipoUsuario"
          label="Tipo de usuario"
          value={userForm.tipoUsuario}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value="admin">Administrador</MenuItem>
          <MenuItem value="student">Estudiante</MenuItem>
          <MenuItem value="juzge">Juez</MenuItem>
          <MenuItem value="analist">Analista</MenuItem>
          <MenuItem value="scout">Ojeador</MenuItem>
          <MenuItem value="dt">Director Técnico</MenuItem>
        </Select>
      </FormControl>
      <UserAddTipeController
        setUserForm={setUserForm}
        userForm={userForm}
        className="Form__input"
        tipeUser={userForm.tipoUsuario}
      />
      <Button variant="contained" onClick={handleClick}>Agregar</Button>
    </Form>
  );
};

export default UserAddForm;
