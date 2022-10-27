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
import LanguajeContext from "../../../contexts/LanguajeContext";

const formTeamInit = {
  nombre_equipo: "",
  id_deporte_equipo:"",
  escudo_equipo: "",
};

const TeamUpdateCard = ({data}) => {
  const [teamForm, setTeamForm] = useState(data);
  const [errors, setErrors] = useState(null);



  const {text} = useContext(LanguajeContext)

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
      method:"POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset-UTF-8",
      },
      body:new URLSearchParams(teamForm)
    }
    fetch("http://apirest.com/equipos",confi).then(e=>e.json()).then(e=>e).catch(e=>console.log(e));

  };

  return (
    <Form>
      <h3>{text.actualizarEquipos}</h3>
      <TextField
        value={teamForm.nombre_equipo}
        onChange={handleChange}
        name="nombre_equipo"
        className="Form__input"
        label={text.nombreDelEquipo}
      ></TextField>
      <FormControl className="Form__input" fullWidth>
        <InputLabel id="demo-simple-select-label">{text.deporte}</InputLabel>
        <Select
          label={text.deporte}
          name="id_deporte_equipo"
          value={teamForm.id_deporte}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={1}>Handball</MenuItem>
          <MenuItem value={2}>football</MenuItem>
          <MenuItem value={3}>basketball</MenuItem>
        </Select>
      </FormControl>

      <Button className="Form__input" variant="contained" component="label">
        {text.escudoDelEquipo}
        <input
          files={teamForm.escudo_equipo}
          name="escudo_equipo"
          onChange={handleEscudo}
          hidden
          accept="image/*"
          type="file"
        />
      </Button>
      <ButtonClassic onClick={handleClick} className="Form__input">{text.agregar}</ButtonClassic>
    </Form>
  );
};

export default TeamUpdateCard;
