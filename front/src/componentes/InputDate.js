import * as React from "react"
import TextField from "@mui/material/TextField"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { useEffect } from "react"
import { FormControl, FormHelperText } from "@mui/material"

const InputDate = ({require,  ok, helperText, name, className, form, setForm, label }) => {
	const [value, setValue] = React.useState(null)

	useEffect(() => {
		setValue(null)
	}, [ok])
	const handleChange = (e) => {
		setValue(e)
		setForm({
			...form,
			[name]: `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`,
		})
	}
	return (
		<div style={{ margin: "20px 0", width: "100%" }}>
			<FormControl >
				<LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
						className="Form__input"
						label={label}
						value={value}
						name={name}
						onChange={handleChange}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
				<FormHelperText>{helperText}</FormHelperText>
			</FormControl>
		</div>
	)
}

export default InputDate
