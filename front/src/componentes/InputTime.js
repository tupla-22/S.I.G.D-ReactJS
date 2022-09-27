import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
export default function InputTime() {
  const [value, setValue] = React.useState(null);

  return (
    <div style={{ margin: "20px 0", width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="Hora"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            console.log(value)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
