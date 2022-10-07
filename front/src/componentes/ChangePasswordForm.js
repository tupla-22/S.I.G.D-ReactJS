import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import {ButtonClassic} from "./ButtonClassic";
import FormCien from "./FormCien";
import React, { useState } from 'react';

import "./styles/ChangePasswordForm.css";
import { helpHttp } from "../helpers/helpHttp";
import { passwordVerifier, urlApi } from "../functions/globals";
import { PSuccess } from "./styledComponents/PSuccess";
import { PAlert } from "./PAlert";
const FormPasswordChange = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [verified, setVerified] = useState(null);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem("user")) ;

  const peticion = helpHttp();

  const handleSubmit = () =>{
    
   
    console.log(passwordVerifier(password,password2))

    if(passwordVerifier(password,password2)){
      const usuario = {password_usuario:password}

      const conf = {
        body:new URLSearchParams(usuario)
      }
      peticion.put(urlApi(`usuarios?id=${user.id_usuario}&nameID=id_usuario`),conf).then(e=>console.log(e))
      setVerified(true)
    }else setError(true);
  }

  const handleChange = (e)=>{
    if(e.target.name=="password_usuario"){
      setPassword(e.target.value)
    }
    if(e.target.name=="passwordVerifier"){
      setPassword2(e.target.value)
    }
  }


  return (
    <FormCien>
      {error && <PAlert>Las contraseñas no coinciden</PAlert>}
      {verified &&<PSuccess>Contraseña cambiada correctamente</PSuccess>}
    <h3>Cambiar contraseña</h3>
      <TextField
        type="password"
        className="FormCien__input"
        label="Nueva contraseña"
        name="password_usuario"
        onChange={handleChange}
      ></TextField>
      <TextField
        type="password"
        label="Repita nueva contraseña"
        className="FormCien__input"
        name="passwordVerifier"
        onChange={handleChange}
      ></TextField>
      <ButtonClassic onClick={handleSubmit}>Cambiar</ButtonClassic>
    </FormCien>
  );
};

export default FormPasswordChange;
