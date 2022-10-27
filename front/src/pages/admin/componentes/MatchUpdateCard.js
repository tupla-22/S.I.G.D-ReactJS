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
  import React, { useState, useEffect, useContext } from 'react';
  import InputDate from "../../../componentes/InputDate";
  import InputTime from "../../../componentes/InputTime";
  import { urlApi } from "../../../functions/globals";
import LanguajeContext from "../../../contexts/LanguajeContext";
  
  
  
  const MatchUpdateCard = ({data}) => {
    const [matchForm, setMatchForm] =useState(data);
    const [equipos, setEquipos] = useState([]);
    const [errors, setErrors] = useState(null);
    const [champ, setChamp] = useState(false);
    const [championships, setChampionships] = useState([]);
  
    const peticion = helpHttp();
    const { text } = useContext(LanguajeContext);
  
    
    useEffect(() => {
      peticion.get(urlApi("equipos?select=*")).then(e=>setEquipos(e.result))
      peticion.get(urlApi("campeonatos?select=*")).then(e=>setChampionships(e.result))
      
    }, []);
    
  
  
  
    const handleChange = (event) => {
      setMatchForm({
        ...matchForm,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleClick = () => {
      const confi = {
        body: new URLSearchParams(matchForm),
      };
       peticion.put(urlApi(`partidos?id=${matchForm.id_partido}&nameID=id_partido`),confi)
        .then((e) => console.log(e.status))
    };
  
  
    return (
      <Form>
        <h3>{text.actualizarPartido} ID:{matchForm.id_partido}</h3>
        <FormControl className="Form__input" fullWidth>
          <InputLabel id="demo-simple-select-label">{text.equipoLocal }</InputLabel>
          <Select
            label={text.equipoLocal}
            name="id_equipoLocal_partido"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
          >
            {equipos.map(e=>(<MenuItem  value={e.id_equipo}>{e.nombre_equipo}</MenuItem>))}
          </Select>
        </FormControl>
        
        <FormControl className="Form__input" fullWidth>
          <InputLabel id="demo-simple-select-label">{text.equipoVisitante}</InputLabel>
          <Select
            label={text.equipoVisitante}
            name="id_equipoVisitante_partido"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
          >
            {equipos.map(e=>(<MenuItem  value={e.id_equipo}>{e.nombre_equipo}</MenuItem>))}
          </Select>
        </FormControl>
        <FormControl className="Form__input" fullWidth>
          <InputLabel id="demo-simple-select-label">{text.tipo}</InputLabel>
          <Select
            label={text.tipo}
            name="tipo_partido"
            value={matchForm.tipo_partido}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
          >
            <MenuItem value={"amistoso"}>Amistoso</MenuItem>
            <MenuItem value={"campeonato"}>Campeonato</MenuItem>
          </Select>
          
        {champ && <FormControl className="Form__input" fullWidth>
          <InputLabel id="demo-simple-select-label">{text.campeonatoAlQuePertenece}</InputLabel>
          <Select
            label={text.campeonatoAlQuePertenece}
            name="id_equipoVisitante_partido"
            value={matchForm.id_equipoLocal_partido}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
          >
            {championships.map((e,i)=>(<MenuItem key={i+1231} name={e.id_campeonato} value={e.nombre_campeonato}>{e.nombre_campeonato}</MenuItem>))}
          </Select>
        </FormControl>}
        
        <InputDate label={text.fecha} form={matchForm} setForm={setMatchForm} name="dia_partido"/>
        <InputTime label={text.hora} form={matchForm} setForm={setMatchForm} name={"hora_partido"}/>
  
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
  
  export default MatchUpdateCard;
  