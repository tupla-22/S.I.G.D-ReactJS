import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { ButtonClassic } from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import "./styles/TeamAddForm.css";
import { helpHttp } from "../../../helpers/helpHttp";
import { blobToBase64 } from "../../../helpers/blobManager";
import { urlApi } from "../../../functions/globals";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { PSuccess } from "../../../componentes/styledComponents/PSuccess";
import { PAlert } from "../../../componentes/PAlert";
import LanguajeContext from "../../../contexts/LanguajeContext";


const formTeamInit = {
  nombre_equipo: "",
  id_deporte_equipo:null,
  escudo_equipo: "",
};


const peticion=helpHttp()

const TeamAddForm = () => {
  const [teamForm, setTeamForm] = useState(formTeamInit);
  const [errors, setErrors] = useState(null);
  const [done, setDone] = useState(false);


  const { text } = useContext(LanguajeContext);

  const handleChange = (event) => {
    setTeamForm({
      ...teamForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleEscudo = (e) => {
    blobToBase64(e.target.name, e.target.files, setTeamForm, teamForm);
  };

  const handleClick = () => {
    const confi = {
      body:new URLSearchParams(teamForm)
    }
    peticion.post(urlApi("equipos?"),confi).then(e=>{
      if(e.status==200) {
        setDone(true)
        setErrors(false)
        setTeamForm(formTeamInit)
      }
      else {setErrors(true)
            setDone(false)
      }
    });

  };

  return (
    <Form>
      <h3>{text.agregarEquipo}</h3>
      {done && <PSuccess>{ text.accionLogradaCorrectamente}</PSuccess>}
      {errors && <PAlert>{text.error }</PAlert>}
      <TextField
        value={teamForm.nombre_equipo}
        FormControl
        required
        onChange={handleChange}
        name="nombre_equipo"
        className="Form__input"
        label={text.nombreDelEquipo}
      ></TextField>
      <FormControl required className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">{text.deporte}</InputLabel>
        <Select
          label={text.deporte}
          name="id_deporte_equipo"
          value={teamForm.id_deporte_equipo}
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
        {text.escudoDelEquipo}  <CameraAltIcon/>
        <input
          name="escudo_equipo"
          onChange={handleEscudo}
          hidden
          accept="image/*"
          type="file"
        />
      </Button>
      <ButtonClassic onClick={handleClick} className="Form__input">{ text.agregar}</ButtonClassic>
    </Form>
  );
};

export default TeamAddForm;
