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
import "./styles/TeamAddForm.css";
import { helpHttp } from "../../../helpers/helpHttp";
import { blobToBase64 } from "../../../helpers/blobManager";
import UserSearch from "./UserSearch";
import React, { useState, useEffect } from "react";
import { urlApi } from "../../../functions/globals";
import EquiposBar from "../../student/componentes/EquiposBar";
import { PSuccess } from "../../../componentes/styledComponents/PSuccess";
import { PAlert } from "../../../componentes/PAlert";

const peticion = helpHttp();

const TeamAddUser = () => {
  const [form, setform] = useState({});
  const [errors, setErrors] = useState(null);
  const [equipos, setEquipos] = useState([]);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);


  const handleChange = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value,
    });

    console.log(form);
  };
  useEffect(() => {
    peticion
      .get(urlApi("equipos?select=nombre_equipo,id_equipo"))
      .then((e) => setEquipos(e.result));
  }, []);

  const handleClick = () => {
    peticion.get(urlApi(`usuarios?select=id_usuario&linkTo=ci_usuario&equalTo=${form.ci_usuario}`)).then(e=> {
        setform({...form,id_usuario_pertenece:e.result[0].id_usuario})
        
    })
    delete form.ci_usuario_pertenece
    const conf = {
        body:new URLSearchParams(form)
    }
    console.log(form)
    peticion.post(urlApi("pertenecen?"),conf).then(e=>{
        console.log(e)
        if(e.status==200){
            setDone(true)
        }else setError(true);
    })

  };

  return (
    <Form>
      {done && <PSuccess>Usuario ingresado correctamente</PSuccess>}
      {error && <PAlert>Ocurrió un error</PAlert>}
      <h3>Agregar usuario a un equipo</h3>
      <TextField
        onChange={handleChange}
        name="ci_usuario_pertenece"
        className="Form__input"
        label="CI del usuario a ingresar"
      ></TextField>
      <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">Equipo</InputLabel>
        <Select
          label="Deporte"
          name="id_equipo_pertenece"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          {equipos.map((e) => (
            <MenuItem value={e.id_equipo}>{e.nombre_equipo}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <ButtonClassic onClick={handleClick} className="Form__input">
        Agregar
      </ButtonClassic>
    </Form>
  );
};

export default TeamAddUser;
