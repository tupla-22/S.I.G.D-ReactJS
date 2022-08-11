import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
} from "@mui/material";
import CarnetSalud from "../../../componentes/CarnetSalud";

const UserAddStudentForm = ({
  className,
  deporteJugado,
  setDeporteJugado,
  userForm,
  setUserForm,
}) => {
  const handleDeporteJugado = (e) => {};
  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleSports1 = (e) => {
    if (!userForm.sports1) {
      setUserForm({
        ...userForm,
        "sports1": e.target.name,
      });
      
    }else delete userForm.sports1;
  };
  const handleSports2 = (e) => {
    if (!userForm.sports2) {
      setUserForm({
        ...userForm,
        "sports2": e.target.name,
      })
    }else delete userForm.sports2;
  };
  const handleSports3 = (e) => {
    if (!userForm.sports3) {
      setUserForm({
        ...userForm,
        "sports3": e.target.name,
      });
      
    }else delete userForm.sports3;
  };

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
      <TextField
        onChange={handleChange}
        name="position"
        className="Form__input"
        label="Posición"
      ></TextField>
      <TextField
        onChange={handleChange}
        name="side"
        className="Form__input"
        label="Lateralidad"
      ></TextField>
      <TextField
        onChange={handleChange}
        className="Form__input"
        name="dorsal"
        label="Numero del dorsal"
        type="number"
      ></TextField>
      <FormGroup>
        <h3>Deporte jugados</h3>
        <FormControlLabel
          name="footbal"
          onChange={handleSports1}
          control={<Checkbox />}
          label="Football"
        />
        <FormControlLabel
          onChange={handleSports2}
          name="basketball"
          control={<Checkbox />}
          label="Basketball"
        />
        <FormControlLabel
          onChange={handleSports3}
          name="handball"
          control={<Checkbox />}
          label="Handball"
        />
      </FormGroup>
    </>
  );
};

export default UserAddStudentForm;
