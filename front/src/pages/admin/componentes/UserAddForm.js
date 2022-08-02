import { MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const UserAddForm = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const sxForm = {};

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      className="userAddForm"
    >
      <TextField variant="standard" label="Nombre"></TextField>
      <TextField variant="standard" label="Apellido"></TextField>
      <TextField variant="standard" type="number" label="Edad"></TextField>
      <Select
      label=""
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="administrador">Administrador</MenuItem>
        <MenuItem value="estudiante">Estudiante</MenuItem>
        <MenuItem value="juez">Juez</MenuItem>
        <MenuItem value="analista">Analista</MenuItem>
        <MenuItem value="ojeador">Ojeador</MenuItem>
      </Select>
    </form>
  );
};

export default UserAddForm;
