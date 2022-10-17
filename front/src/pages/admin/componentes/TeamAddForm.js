import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { ButtonClassic } from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import "./styles/TeamAddForm.css";
import { helpHttp } from "../../../helpers/helpHttp";
import { blobToBase64 } from "../../../helpers/blobManager";
import { urlApi } from "../../../functions/globals";

const formTeamInit = {
  nombre_equipo: "",
  id_deporte_equipo:null,
  escudo_equipo: "",
};


const peticion=helpHttp()

const TeamAddForm = () => {
  const [teamForm, setTeamForm] = useState(formTeamInit);
  const [errors, setErrors] = useState(null);

  const handleChange = (event) => {
    setTeamForm({
      ...teamForm,
      [event.target.name]: event.target.value,
    });
    console.log(teamForm);
  };

  const handleEscudo = (e) => {
    blobToBase64(e.target.name, e.target.files, setTeamForm, teamForm);
    console.log(teamForm);
  };

  const handleClick = () => {
    console.log(teamForm)
    const confi = {
      body:new URLSearchParams(teamForm)
    }
    peticion.post(urlApi("equipos?"),confi).then(e=>console.log(e));

  };

  return (
    <Form>
      <h3>Agregar un equipo</h3>
      <TextField
        onChange={handleChange}
        name="nombre_equipo"
        className="Form__input"
        label="Nombre del equipo"
      ></TextField>
      <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">Deporte</InputLabel>
        <Select
          label="Deporte"
          name="id_deporte_equipo"
          value={teamForm.id_deporte}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={"handball"}>Handball</MenuItem>
          <MenuItem value={"football"}>football</MenuItem>
          <MenuItem value={"basketball"}>basketball</MenuItem>
        </Select>
      </FormControl>

      <Button className="Form__input" variant="contained" component="label">
        Escudo del equipo
        <input
          name="escudo_equipo"
          onChange={handleEscudo}
          hidden
          accept="image/*"
          type="file"
        />
      </Button>
      <ButtonClassic onClick={handleClick} className="Form__input">Agregar</ButtonClassic>
    </Form>
  );
};

export default TeamAddForm;
