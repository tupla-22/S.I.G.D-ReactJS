import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CarnetSalud = ({ className,userForm,setUserForm }) => {
  const [value, setValue] = React.useState(null);

  const handleChange = (e)=>{
    setValue(userForm.nhsCard);
    setUserForm(
      {
        ...userForm,
        "nhsCard":e
      }
    );
  }
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          className="Form__input"
          label="Carnet de salud valido hasta"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default CarnetSalud;
