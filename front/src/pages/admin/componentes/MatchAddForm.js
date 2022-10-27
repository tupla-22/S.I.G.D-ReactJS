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
import React, { useState, useEffect, useContext } from "react";
import InputDate from "../../../componentes/InputDate";
import InputTime from "../../../componentes/InputTime";
import { urlApi } from "../../../functions/globals";
import { PSuccess } from "../../../componentes/styledComponents/PSuccess";
import { PAlert } from "../../../componentes/PAlert";
import LanguajeContext from "../../../contexts/LanguajeContext";


const formmatchInit = {
  id_equipoLocal_partido: "",
  id_equipoVisitante_partido: "",
  tipo_partido: "",
};

const MatchAddForm = () => {
  const [matchForm, setMatchForm] = useState(formmatchInit);
  const [equipos, setEquipos] = useState([]);
  const [errors, setErrors] = useState(null);
  const [champ, setChamp] = useState(false);
  const [championships, setChampionships] = useState([]);
  const [deportes, setDeportes] = useState([]);
  const [deporteElegido, setDeporteElegido] = useState("");
  const [done, setDone] = useState(false);

  const {text} = useContext(LanguajeContext)
  const peticion = helpHttp();

  useEffect(() => {
    peticion.get(urlApi("deportes?")).then((e) => {
      if (e.status == 200) {
        setDeportes(e.result);
      }
    });
  }, []);

  useEffect(() => {
    peticion
      .get(
        urlApi(
          `equipos?select=*&linkTo=id_deporte_equipo&equalTo=${deporteElegido}`
        )
      )
      .then((e) => {
        if (e.status == 200) {
          setEquipos(e.result);
        }
      });
    peticion.get(urlApi("campeonatos?select=*")).then((e) => {
      if (e.status == 200) {
        console.log(e)
        setChampionships(e.result);
      }
    });
  }, [deporteElegido]);

  const handleChange = (event) => {
    setMatchForm({
      ...matchForm,
      [event.target.name]: event.target.value,
    });
    console.log(matchForm);
  };

  const handleDeporteElegido = (e) => {
    setDeporteElegido(e.target.value);
  };

  const handleClick = () => {
    const confi = {
      body: new URLSearchParams(matchForm),
    };
    peticion.post(urlApi("partidos?"), confi).then((e) => {
    if(e.status==200){
      setDone(true)
      setErrors(false)
    }else{
      setErrors(true)
      setDone(false)
    }
  }
    
    );
  };

  return (
    <Form>

      {done && <PSuccess>{text.accionLograda}</PSuccess>}
      {errors && <PAlert>{text.error}</PAlert>}
      <h3>{text.agregarPartido}</h3>

      <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">{text.deporte}</InputLabel>
        <Select
          label={text.deporte}
          name="id_equipoLocal_partido"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleDeporteElegido}
        >
          {deportes.map((e) => (
            <MenuItem value={e.id_deporte}>{e.id_deporte}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">{text.equipoLocal }</InputLabel>
        <Select
          label={text.equipoLocal}
          name="id_equipoLocal_partido"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          {equipos.map((e) => (
            <MenuItem value={e.id_equipo}>{e.nombre_equipo}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">{ text.equipoVisitante}</InputLabel>
        <Select
          label={text.equipoVisitante}
          name="id_equipoVisitante_partido"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          {equipos.map((e) => (
            <MenuItem value={e.id_equipo}>{e.nombre_equipo}</MenuItem>
          ))}
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
        {matchForm.tipo_partido == "campeonato" && (
          <FormControl className="Form__input" fullWidth>
            <InputLabel id="demo-simple-select-label">
              Campeonato al que pertenece
            </InputLabel>
            <Select
              label="Campeonato al que pertenece"
              name="id_equipoVisitante_partido"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
            >
              {championships.map((e) => (
                <MenuItem name={e.id_campeonato} value={e.nombre_campeonato}>
                  {e.nombre_campeonato}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

       
        

        <InputDate
          label={text.fecha}
          form={matchForm}
          setForm={setMatchForm}
          name="dia_partido"
        />
        <InputTime
          label={text.hora}
          form={matchForm}
          setForm={setMatchForm}
          name={"hora_partido"}
        />
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
        {text.agregar}
      </ButtonClassic>
    </Form>
  );
};

export default MatchAddForm;
