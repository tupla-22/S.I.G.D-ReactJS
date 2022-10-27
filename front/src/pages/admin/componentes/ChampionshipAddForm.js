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
import { PSuccess } from "../../../componentes/styledComponents/PSuccess";
import { PAlert } from "../../../componentes/PAlert";
import LanguajeContext from "../../../contexts/LanguajeContext";


const formchampionshipInit = {
  nombre_campeonato: "",
  id_liga_campeonato: "",
  deporte_campeonato: "",
};

const ChampionshipAddForm = () => {
  const [championshipForm, setchampionshipForm] =
    useState(formchampionshipInit);
  const [errors, setErrors] = useState(null);
  const [ligas, setLigas] = useState([]);
  const [deportes, setDeportes] = useState([]);
  const [done, setDone] = useState(false);



  const {text} = useContext(LanguajeContext)
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
    peticion.post(urlApi("campeonatos?"),confi).then(e=>{
      if(e.status==200){
        setErrors(false)
        setDone(true)
      }else {
        setErrors(true)
        setDone(false)
      }
    }
      
      )

  };

  return (
    <Form>
      <h3>{ text.agregarCampeonato}</h3>
      {done && <PSuccess>{text.accionLograda}</PSuccess>}
      {errors && <PAlert>{text.error}</PAlert>}
      <TextField
        onChange={handleChange}
        name="nombre_campeonato"
        className="Form__input"
        label={text.nombreDelCampeonato}
      ></TextField>
       <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">{ text.deporte }</InputLabel>
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
        {text.agregar}
      </ButtonClassic>
    </Form>
  );
};

export default ChampionshipAddForm;
