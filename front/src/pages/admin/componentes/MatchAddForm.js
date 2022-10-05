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
import { helpHttp } from "../../../helpers/helpHttp";
import React, { useState, useEffect } from 'react';
import InputDate from "../../../componentes/InputDate";
import InputTime from "../../../componentes/InputTime";
import { urlApi } from "../../../functions/globals";


const formmatchInit = {
  id_equipoLocal_partido: "",
  id_equipoVisitante_partido: "",
  tipo_campeonato: "",
};

const MatchAddForm = () => {
  const [matchForm, setMatchForm] =useState(formmatchInit);
  const [equipos, setEquipos] = useState([]);
  const [errors, setErrors] = useState(null);
  const [champ, setChamp] = useState(false);
  const [championships, setChampionships] = useState([]);

  const peticion = helpHttp();


  useEffect(() => {
    peticion.get(urlApi("equipos?select=*")).then(e=>setEquipos(e.result))
    peticion.get(urlApi("campeonatos?select=*")).then(e=>setChampionships(e.result))
    
  }, []);
  



  const handleChange = (event) => {
    setMatchForm({
      ...matchForm,
      [event.target.name]: event.target.value,
    });
    console.log(matchForm);
  };

  const handleClick = () => {
    console.log(matchForm);
    const confi = {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset-UTF-8",
      },
      body: new URLSearchParams(matchForm),
    };
    fetch("http://apirest.com/campeonatos", confi)
      .then((e) => e.json())
      .then((e) => e)
      .catch((e) => console.error(e));
  };


  const handleChangeTeamLocal = (e) =>{
    setMatchForm({...matchForm,id_equipoLocal_partido:e.target.name});
    console.log(matchForm)
  }
  const handleChangeTeamVisitante = (e) =>{
    setMatchForm({...matchForm,id_equipoVisitante_partido:e.target.name});
    console.log(matchForm)
  }

  return (
    <Form>
      <h3>Agregar un partido</h3>
      <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">Equipo local</InputLabel>
        <Select
          label="Equipo local"
          name="id_liga_campeonato"
          value={matchForm.id_equipoLocal_partido}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChangeTeamLocal}
        >
          {equipos.map(e=>(<MenuItem name={e.id_equipo} value={e.nombre_equipo}>{e.nombre_equipo}</MenuItem>))}
        </Select>
      </FormControl>
      
      <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">Equipo visitante</InputLabel>
        <Select
          label="Equipo visitante"
          name="id_equipoVisitante_partido"
          value={matchForm.id_equipoLocal_partido}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChangeTeamVisitante}
        >
          {equipos.map(e=>(<MenuItem name={e.id_equipo} value={e.nombre_equipo}>{e.nombre_equipo}</MenuItem>))}
        </Select>
      </FormControl>
      <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          label="Tipo"
          name="tipo_campeonato"
          value={matchForm.tipo_partido}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={"amistoso"}>Amistoso</MenuItem>
          <MenuItem value={"campeonato"}>Campeonato</MenuItem>
        </Select>
        
      {champ && <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">Campeonato al que pertenece</InputLabel>
        <Select
          label="Campeonato al que pertenece"
          name="id_equipoVisitante_partido"
          value={matchForm.id_equipoLocal_partido}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChangeTeamVisitante}
        >
          {championships.map(e=>(<MenuItem name={e.id_campeonato} value={e.nombre_campeonato}>{e.nombre_campeonato}</MenuItem>))}
        </Select>
      </FormControl>}
      
      <InputDate label={"Fecha"} form={matchForm} setForm={setMatchForm} name="fecha_partido"/>
      <InputTime/>

      </FormControl>
      
      {/* <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">Liga</InputLabel>
        <Select
          label="Liga"
          name="id_liga_campeonato"
          value={matchForm.id_liga_partido}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl> */}
      <ButtonClassic onClick={handleClick} className="Form__input">
        Agregar
      </ButtonClassic>
    </Form>
  );
};

export default MatchAddForm;
