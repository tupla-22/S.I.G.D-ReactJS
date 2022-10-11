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
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { PAlert } from "../../../componentes/PAlert";
import { blobToBase64 } from "../../../helpers/blobManager";
import { urlApi } from "../../../functions/globals";
import { getToken } from "../../../functions/User";
import { helpHttp } from "../../../helpers/helpHttp";
import { PSuccess } from "../../../componentes/styledComponents/PSuccess";
import InputDate from "../../../componentes/InputDate";

const userFormInit = {
  ci_usuario: "",
  primerNombre_usuario: "",
  segundoNombre_usuario: "",
  primerApellido_usuario: "",
  segundoApellido_usuario: "",
  fechaNac_usuario: "",
  email_usuario: "",
  password_usuario: "",
  id_rol_usuario: "",
};

const UserAddForm = () => {
  const [userForm, setUserForm] = useState(userFormInit);
  const [typeUser, setTypeUser] = useState("");
  const [passwordVerified, setPasswordVerified] = useState(true);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [created, setCreated] = useState(false);
  const [fichaForm, setFichaForm] = useState({});
  const [idFichaJugador, setIdFichaJugador] = useState("");
  const [idUsuario, setIdUsuario] = useState("");
  const peticion = helpHttp();
  const [pertenecenForm, setPertenecenForm] = useState({});



  const handleClick = (e) => {
    e.preventDefault();
    console.log(userForm);
    if (passwordVerified) {
      const data = {
        body: new URLSearchParams(userForm),
      };

      peticion
        .post("http://apirest.com/usuarios?register=true&suffix=usuario", data)
        .then((e) => {
          console.log(e.status);
          
          if (e.status == 200) {
            
          setIdUsuario(e.result.lastId);
          
          setUserForm(userFormInit)
          }
        });

      peticion
        .post(urlApi(`fichasJugadores?`), {
          body: new URLSearchParams(fichaForm),
        })
        .then((e) => {
          setIdFichaJugador(e.result.lastId);
          setPertenecenForm({...pertenecenForm,id_fichaJugador_pertenece:e.result.lastId});
          console.log(e.status);
          if (!created) {
            
          setCreated(true);
            // setUserForm(userFormInit)
          }else setCreated(false)
        });
        
    }
  };


  // INGRESANDO TABLA TIENEN RELACIONADAS ENTRE SI

  useEffect(() => {
    
    const dataTienen = {
      id_usuario_tiene: idUsuario,
      id_fichaJugador_tiene: idFichaJugador,
    };
    console.log(dataTienen);
    peticion
      .post(urlApi("tienen?"), {
        body: new URLSearchParams(dataTienen),
      })
      .then((e) => console.log(e.status));

      peticion.post(urlApi("pertenecen?"),{body:new URLSearchParams(pertenecenForm)}).then(e=>console.log(e.result,"result de pertenecen"))
  }, [created]);

  const handleUser = (e) => {
    setTypeUser(e.target.value);
    setUserForm({ ...userForm, id_rol_usuario: e.target.value });
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

    console.log(userForm, fichaForm);
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

  const handlePhoto = (e) => {
    blobToBase64(e.target.name, e.target.files, setUserForm, userForm);
  };

  return (
    <Form
      style={{ display: "flex", flexDirection: "column" }}
      className="userAddForm"
    >
      {created && <PSuccess>Usuario creado correctamente</PSuccess>}
      <h3>Agregar un usuario</h3>
      <TextField
      required
        value={userForm.ci_usuario}
        onChange={handleChange}
        name="ci_usuario"
        type="number"
        className="Form__input"
        label="Cédula de identidad"
      ></TextField>
      <TextField
      required
        value={userForm.primerNombre_usuario}
        onChange={handleChange}
        name="primerNombre_usuario"
        className="Form__input"
        label="nombre"
      ></TextField>
      <TextField
        value={userForm.segundoNombre_usuario}
        onChange={handleChange}
        name="segundoNombre_usuario"
        className="Form__input"
        label="Segundo nombre"
      ></TextField>
      <TextField
      required
        value={userForm.primerApellido_usuario}
        onChange={handleChange}
        name="primerApellido_usuario"
        className="Form__input"
        label="Apellido"
      ></TextField>
      <TextField
        value={userForm.segundoApellido_usuario}
        onChange={handleChange}
        name="segundoApellido_usuario"
        className="Form__input"
        label="Segundo apellido"
      ></TextField>
      <TextField
      required
        value={userForm.email_usuario}
        onChange={handleChange}
        name="email_usuario"
        className="Form__input"
        label="Email"
        type="email"
      ></TextField>
      <InputDate
      required
        label={"Fecha de nacimiento"}
        name={"fechaNac_usuario"}
        form={userForm}
        setForm={setUserForm}
      ></InputDate>

      {/* <TextField onChange={handleChange} name="tel" type="number" className="Form__input" label="Telefono"></TextField> */}
      <TextField
      required
        onBlur={handleVerifiedPassword}
        onChange={handleChange}
        name="password_usuario"
        className="Form__input"
        type="password"
        label="Contraseña"
      ></TextField>
      {!passwordVerified && <PAlert>Los campos contraseña no coinciden</PAlert>}
      <TextField
      required
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
        required
          name="id_rol_usuario"
          label="Tipo de usuario"
          value={userForm.tipoUsuario}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleUser}
        >
          <MenuItem value={2}>Administrador</MenuItem>
          <MenuItem value={3}>Estudiante</MenuItem>
          <MenuItem value={4}>Reclutador</MenuItem>
          <MenuItem value={5}>Juez</MenuItem>
          <MenuItem value={6}>Director Técnico</MenuItem>
          <MenuItem value={7}>Analista</MenuItem>
        </Select>
      </FormControl>
      <UserAddTipeController
        pertenecenForm={pertenecenForm}
        setPertenecenForm={setPertenecenForm}
        setForm={setFichaForm}
        form={fichaForm}
        className="Form__input"
        tipeUser={typeUser}
      />

      <InputDate
        label={"Carnet de salud válido"}
        name={"carneSalud_usuario"}
        form={userForm}
        setForm={setUserForm}
      ></InputDate>
      <Button variant="contained" component="label">
        Foto de perfil
        <input
          name="fotoPerfil_usuario"
          onChange={handlePhoto}
          hidden
          accept="image/*"
          type="file"
        />
        <PhotoCamera />
      </Button>
      <IconButton
        label=""
        color="primary"
        aria-label="upload picture"
        component="label"
      ></IconButton>

      <ButtonClassic type="submit" variant="contained" onClick={handleClick}>
        Agregar
      </ButtonClassic>
    </Form>
  );
};

export default UserAddForm;
