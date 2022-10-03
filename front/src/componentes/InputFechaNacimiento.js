import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const InputFechaNacimiento = ({ className, userForm,setUserForm }) => {
  const [value, setValue] = React.useState(userForm.fechaNac_usuario);

  const handleChange = (e)=>{
    setValue(e);
    setUserForm(
      {
        ...userForm,
        "fechaNac_usuario":`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`
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
