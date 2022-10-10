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
import InputDate from "../../../componentes/InputDate";

const UserAddStudentForm = ({
  className,
  deporteJugado,
  setDeporteJugado,
  form,
  setForm
}) => {
  const handleDeporteJugado = (e) => {};
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form)
  };

  // const handleSports1 = (e) => {
  //   if (!form.sports1) {
  //     setForm({
  //       ...form,
  //       "sports1": e.target.name,
  //     });
      
  //   }else delete form.sports1;
  // };
  // const handleSports2 = (e) => {
  //   if (!form.sports2) {
  //     setForm({
  //       ...form,
  //       "sports2": e.target.name,
  //     })
  //   }else delete form.sports2;
  // };
  // const handleSports3 = (e) => {
  //   if (!form.sports3) {
  //     setForm({
  //       ...form,
  //       "sports3": e.target.name,
  //     });
      
  //   }else delete form.sports3;
  // };

  return (
    <>
      <TextField
        onChange={handleChange}
        name="peso_fichaJugador"
        className="Form__input"
        label="Peso"
        id="outlined-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
      />
      <TextField
        onChange={handleChange}
        name="altura_fichaJugador"
        label="altura"
        className="Form__input"
        InputProps={{
          startAdornment: <InputAdornment position="start">cm</InputAdornment>,
        }}
      />
      {/* <TextField
        onChange={handleChange}
        name="position"
        className="Form__input"
        label="Posición"
      ></TextField> */}
      
      <FormControl className="Form__input">
        <InputLabel id="demo-simple-select-label">Lateralidad</InputLabel>
        <Select
          name="lateralidad_fichaJugador"
          label="Lateralidad"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={"zurdo"}>Zurdo</MenuItem>
          <MenuItem value={"diestro"}>Diestro</MenuItem>
          <MenuItem value={"ambidiestro"}>Ambidiestro</MenuItem>
        </Select>
      </FormControl>
      {/* <TextField
        onChange={handleChange}
        className="Form__input"
        name="dorsal"
        label="Numero del dorsal"
        type="number"
      ></TextField> */}
      {/* <FormGroup>
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
      </FormGroup> */}
    </>
  );
};

export default UserAddStudentForm;
