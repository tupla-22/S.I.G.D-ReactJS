import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const InputFechaNacimiento = ({ className, userForm,setUserForm }) => {
  const [value, setValue] = React.useState(null);

  const handleChange = (e)=>{
    setValue(userForm.birthDate);
    setUserForm(
      {
        ...userForm,
        "fechaNac_usuario":`${e.getFullYear()}-${e.getMonth()}-${e.getDay()+1}`
      }
    );
  }
  return (
    <>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          className="Form__input"
          label="Fecha de nacimiento"
          value={value}
          name="fechaNac_usuario"
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default InputFechaNacimiento;
