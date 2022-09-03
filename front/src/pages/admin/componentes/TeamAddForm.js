import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {ButtonClassic} from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import "./styles/TeamAddForm.css";



const formTeamInit = {
      nombreEquipo:"",
      deporte:"",
      logoEquipo:""
}


const TeamAddForm = () => {
  const [teamForm, setTeamForm] = useState(formTeamInit);

  const handleChange = (event) => {
    setTeamForm(
      {
        ...teamForm,
        [event.target.name]:event.target.value
      }
    );
    console.log(teamForm);
  };

  const sxForm = {};

  return (
    <Form>
      <h3>Agregar un equipo</h3>
      <TextField onChange={handleChange} name="nombreEquipo" className="Form__input" label="Nombre del equipo"></TextField>
      <FormControl className="Form__input" fullWidth>
        <InputLabel  id="demo-simple-select-label">Deporte</InputLabel>
        <Select
          label="Deporte"
          name="deporte"
          value={teamForm.deporte}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value="handball">Handball</MenuItem>
          <MenuItem value="football">football</MenuItem>
          <MenuItem value="basketball">basketball</MenuItem>
        </Select>
      </FormControl>

      <Button className="Form__input" variant="contained" component="label">
        Escudo del equipo
        <input onChange={handleChange} name="logoEquipo" hidden accept="image/*" type="file" />
      </Button>
      <ButtonClassic className="Form__input" >Agregar</ButtonClassic>
    </Form>
  );
};

export default TeamAddForm;
