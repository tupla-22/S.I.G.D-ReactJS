import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState, useEffect } from 'react';


export default function InputTime({label,name,form,setForm}) {
  const [value, setValue] = React.useState(null);
  return (
    <div style={{ margin: "20px 0", width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label={label}
          value={value}
          onChange={(date) => {
            setValue(date);
            setForm({...form,[name]:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`})
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
