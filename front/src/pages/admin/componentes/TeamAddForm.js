import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import ButtonClassic from "../../../componentes/ButtonClassic";
import "./styles/TeamAddForm.css";
const TeamAddForm = () => {
  const [deporte, setDeporte] = useState("");

  const handleChange = (event) => {
    setDeporte(event.target.value);
  };

  const sxForm = {};

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      className="teamAddForm"
    >
      
      <h3>Agregar un equipo</h3>
      <TextField variant="standard" label="Nombre del equipo"></TextField>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Deporte</InputLabel>
      <Select
        label="Deporte"
        value={deporte}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={handleChange}
      >
        <MenuItem value="administrador">Handball</MenuItem>
        <MenuItem value="estudiante">football</MenuItem>
        <MenuItem value="juez">basketball</MenuItem>
      </Select>
      </FormControl>
      
      <Button  variant="contained" component="label">
        Escudo del equipo
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <ButtonClassic>Agregar</ButtonClassic>
    </form>
  );
};

export default TeamAddForm;
