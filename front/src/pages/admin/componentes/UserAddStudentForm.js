import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CarnetSalud from "../../../componentes/CarnetSalud";

const UserAddStudentForm = ({ className, deporteJugado, setDeporteJugado, userForm,setUserForm }) => {
  const handleDeporteJugado = (e) => {};
  const handleChange = (e)=>{
    setUserForm(
      {...userForm,
        [e.target.name]:e.target.value
      
      }
    );
    console.log(userForm)
  }
  return (
    <>
      <CarnetSalud userForm={userForm} setUserForm={setUserForm}></CarnetSalud>
      <TextField
        onChange={handleChange}
        name="weight"      
        className="Form__input"
        label="Peso"
        id="outlined-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
      />
      <TextField
        onChange={handleChange}
        name="height"
        label="altura"
        className="Form__input"
        InputProps={{
          startAdornment: <InputAdornment position="start">cm</InputAdornment>,
        }}
      />
      <TextField onChange={handleChange} name="position" className="Form__input" label="Posición"></TextField>
      <TextField onChange={handleChange} name="side" className="Form__input" label="Lateralidad"></TextField>
      <TextField
        onChange={handleChange}
        className="Form__input" name="dorsal"
        label="Numero del dorsal"
        type="number"
      ></TextField>
      <FormGroup>
      <h3>Deporte jugados</h3>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Football" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Basketball" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Handball" />
      </FormGroup>
    </>
  );
};

export default UserAddStudentForm;
