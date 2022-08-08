import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ButtonClassic from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import InputFechaNacimiento from "../../../componentes/InputFechaNacimiento";
import "./styles/UserAddForm.css";
import UserAddTipeController from "./UserAddTipeController";
import React, { useState, useEffect } from 'react';

const UserAddForm = () => {
  const [userForm, setUserForm] = useState({});

  const handleClick = () =>{
  }

  const handleChange = (event) => {
    setUserForm(
      {
        ...userForm,
        [event.target.name]:event.target.value
      }
    );
    console.log(userForm)
  };




  const sxForm = {};

  return (
    <Form
      style={{ display: "flex", flexDirection: "column" }}
      className="userAddForm"
    >
      <h3>Agregar un usuario</h3>
      <TextField onChange={handleChange} name="name"  className="Form__input" label="Nombres"></TextField>
      <TextField onChange={handleChange} name="lastName" className="Form__input" label="Apellidos"></TextField>
      <InputFechaNacimiento userForm={userForm} setUserForm={setUserForm}/>
      <TextField onChange={handleChange} name="email" className="Form__input" label="Email"></TextField>
      <TextField onChange={handleChange} name="tel" className="Form__input" label="Telefono"></TextField>
      <TextField onChange={handleChange} name="age" className="Form__input" type="number" label="Edad"></TextField>
      
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
      <UserAddTipeController setUserForm={setUserForm} userForm={userForm} className="Form__input" tipeUser={userForm.tipoUsuario}/>
      <ButtonClassic handleClick={handleClick}>Agregar</ButtonClassic>
    </Form>
  );
};

export default UserAddForm;
