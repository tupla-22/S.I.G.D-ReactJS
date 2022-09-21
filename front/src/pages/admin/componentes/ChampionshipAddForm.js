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
import "./styles/championshipAddForm.css";
import { helpHttp } from "../../../helpers/helpHttp";

const formchampionshipInit = {
  nombre_campeonato: "",
  id_liga_campeonato: "",
  tipo_campeonato: "",
};

const ChampionshipAddForm = () => {
  const [championshipForm, setchampionshipForm] =
    useState(formchampionshipInit);
  const [errors, setErrors] = useState(null);

  const handleChange = (event) => {
    setchampionshipForm({
      ...championshipForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    console.log(championshipForm);
    const confi = {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset-UTF-8",
      },
      body: new URLSearchParams(championshipForm),
    };
    fetch("http://apirest.com/campeonatos", confi)
      .then((e) => e.json())
      .then((e) => console.log(e))
      .catch((e) => console.error(e));
  };

  return (
    <Form>
      <h3>Agregar un campeonato</h3>
      <TextField
        onChange={handleChange}
        name="nombre_campeonato"
        className="Form__input"
        label="Nombre del campeonato"
      ></TextField>
       <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">Deporte</InputLabel>
        <Select
          label="Deporte"
          name="tipo_campeonato"
          value={championshipForm.tipo_campeonato}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={"football"}>Football</MenuItem>
          <MenuItem value={"basketball"}>Baketball</MenuItem>
          <MenuItem value={"handball"}>Handball</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">Liga</InputLabel>
        <Select
          label="Liga"
          name="id_liga_campeonato"
          value={championshipForm.id_liga_campeonato}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
      <ButtonClassic onClick={handleClick} className="Form__input">
        Agregar
      </ButtonClassic>
    </Form>
  );
};

export default ChampionshipAddForm;
