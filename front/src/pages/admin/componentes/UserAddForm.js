import {
  Button,
  FormControl,
  IconButton,
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
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { PAlert } from "../../../componentes/PAlert";
import { converterBase64 } from "../../../helpers/converterBase64";

const UserAddForm = () => {
  const [userForm, setUserForm] = useState({});
  const [typeUser, setTypeUser] = useState("");
  const [passwordVerified, setPasswordVerified] = useState(true);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);

  const handleClick = () => {
    if (passwordVerified) {
      const userAdd = async () => {
        const ciuser = parseInt(userForm.ci_usuario);
        setUserForm({ ...userForm, ci_usuario: ciuser });
        console.log(JSON.stringify(userForm));
        const datos = new URLSearchParams(userForm);

        const data = {
          method: "POST",
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset-UTF-8",
          },
          body: datos,
        };

        let response = await fetch("http://apirest.com/usuarios?register=true&suffix=usuario", data)
          .then((e) => e)
          .then((e) => console.log(e))
          .catch((e) => console.error(e.body));
        console.log(response);
      };
      userAdd();
    }
  };

  const handleUser = (e) => {
    setTypeUser(e.target.value);
    setUserForm({...userForm,"id_rol_usuario":e.target.value});
  };

  const handleChange = (event) => {
    if (event.target.name != "password_usuario") {
      setUserForm({
        ...userForm,
        [event.target.name]: event.target.value,
      });
    }
    if (event.target.name == "password_usuario") {
      setUserForm({ ...userForm, [event.target.name]: event.target.value });
    }
    console.log(userForm)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleVerifiedPassword = () => {
    if (userForm.password_usuario == password) {
      setPasswordVerified(true);
      setErrors(true);
    } else setPasswordVerified(false);
  };

  const handlePhoto = (e)=>{
    converterBase64(e.target.name,e.target.files,setUserForm,userForm);
  }

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
        label="nombre"
      ></TextField>
      <TextField
        onChange={handleChange}
        name="segundoNombre_usuario"
        className="Form__input"
        label="Segundo nombre"
      ></TextField>
      <TextField
        onChange={handleChange}
        name="primerApellido_usuario"
        className="Form__input"
        label="Apellido"
      ></TextField>
      <TextField
        onChange={handleChange}
        name="segundoApellido_usuario"
        className="Form__input"
        label="Segundo apellido"
      ></TextField>
      <TextField
        onChange={handleChange}
        name="email_usuario"
        className="Form__input"
        label="Email"
      ></TextField>
      <InputFechaNacimiento userForm={userForm} setUserForm={setUserForm} />

      {/* <TextField onChange={handleChange} name="tel" type="number" className="Form__input" label="Telefono"></TextField> */}
      <TextField
        onBlur={handleVerifiedPassword}
        onChange={handleChange}
        name="password_usuario"
        className="Form__input"
        type="password"
        label="Contraseña"
      ></TextField>
      {!passwordVerified && <PAlert>Los campos contraseña no coinciden</PAlert>}
      <TextField
        onChange={handlePassword}
        onBlur={handleVerifiedPassword}
        name="password_usuario_verified"
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
          onChange={handleUser}
        >
          <MenuItem value={2}>Administrador</MenuItem>
          <MenuItem value={3}>Estudiante</MenuItem>
          <MenuItem value={4}>Reclutador</MenuItem>
          <MenuItem value={5}>Analista</MenuItem>
          <MenuItem value={6}>Juez</MenuItem>
          <MenuItem value={7}>Ojeador</MenuItem>
          <MenuItem value={8}>Director Técnico</MenuItem>
        </Select>
      </FormControl>
      <UserAddTipeController
        setUserForm={setUserForm}
        userForm={userForm}
        className="Form__input"
        tipeUser={userForm.tipoUsuario}
      />
      <Button variant="contained" component="label">
        Foto de perfil
        <input name="" onChange={handlePhoto} hidden accept="image/*" type="file" />
        <PhotoCamera />
      </Button>
      <IconButton
        label=""
        color="primary"
        aria-label="upload picture"
        component="label"
      ></IconButton>

      <Button variant="contained" onClick={handleClick}>
        Agregar
      </Button>
    </Form>
  );
};

export default UserAddForm;
