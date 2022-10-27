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
import "./styles/championshipAddForm.css";
import { helpHttp } from "../../../helpers/helpHttp";
import InputDate from "../../../componentes/InputDate";
import InputTime from "../../../componentes/InputTime";
import { useState, useEffect, useContext } from 'react';
import { urlApi } from "../../../functions/globals";
import LanguajeContext from "../../../contexts/LanguajeContext";


const formchampionshipInit = {
  nombre_campeonato: "",
  id_liga_campeonato: "",
  deporte_campeonato: "",
};

const ChampionshipUpdateCard = ({data}) => {
  const [championshipForm, setchampionshipForm] =
    useState(data);
  const [errors, setErrors] = useState(null);
  const [ligas, setLigas] = useState([]);
  const [deportes, setDeportes] = useState([]);

  const { text } = useContext(LanguajeContext);
  const peticion = helpHttp();

  useEffect(() => {
    
    peticion.get(urlApi("ligas?select=*")).then(e=>{ 
      setLigas(e.result)});
      peticion.get(urlApi("deportes?select=id_deporte")).then(e=>{ 
        setDeportes(e.result)});
  }, []);


  const handleChange = (event) => {
    console.log(championshipForm)
    setchampionshipForm({
      ...championshipForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    console.log(championshipForm);
    const confi = {
      body: new URLSearchParams(championshipForm),
    };
    peticion.put(urlApi(`campeonatos?id=${championshipForm.id_campeonato}&nameID=id_campeonato`),confi).then(e=>console.log(e))

  };

  return (
    <Form>
      <h3>{text.actualizarCampeonato}</h3>
      <TextField
        value={championshipForm.nombre_campeonato}
        onChange={handleChange}
        name="nombre_campeonato"
        className="Form__input"
        label={text.nombreDelCampeonato}
      ></TextField>
       <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">{text.deporte}</InputLabel>
        <Select
          label={text.deporte}
          name="deporte_campeonato"
          value={championshipForm.deporte_campeonato}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
           {deportes.map(e=>(<MenuItem value={`${e.id_deporte}`}>{e.id_deporte}</MenuItem>))}
        </Select>
      </FormControl>
      <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">{text.liga}</InputLabel>
        <Select
          label={text.liga}
          name="id_liga_campeonato"
          value={championshipForm.id_liga_campeonato}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          {ligas.map(e=>(<MenuItem value={`${e.id_liga}`}>{e.nombre_liga}</MenuItem>))}
        </Select>
      </FormControl>
      <InputDate form={championshipForm} setForm={setchampionshipForm} name={"fechaInicio_campeonato"} label={text.fechaDeInicio}></InputDate>
      <InputDate form={championshipForm} setForm={setchampionshipForm} name={"fechaFin_campeonato"} label={text.fechaDeCierre}></InputDate>
      
      <ButtonClassic onClick={handleClick} className="Form__input">
        {text.actualizar}
      </ButtonClassic>
    </Form>
  );
};

export default ChampionshipUpdateCard;
