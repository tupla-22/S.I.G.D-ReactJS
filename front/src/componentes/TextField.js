import { FormControl, TextField } from "@mui/material"
import React, { useState, useEffect } from "react"

const TextFieldRex = ({
	variant,
	id,
	label,
	regex,
	setErrors,
	name,
	errors,
	form,
	setForm,
	type,
    helperText,
    value,
    required,
    onBlur
}) => {
	const [error, setError] = useState(false)

    const handleChange = (e) => {
        
			setForm({ ...form, [name]: e.target.value })
		// onChange(e)
		if (regex.test(e.target.value)) {
			setError(false)
			setErrors({ ...errors, [name]: false })
		} else {
			setError(true)
			setErrors({ ...errors, [name]: true })
        }
        console.log(form)
	}

	return (
		<FormControl>
            <TextField
                onBlur={onBlur}
                margin="dense"
                required={required}
                value={value}
				name={name}
				id={id}
				error={error}
				onChange={handleChange}
				label={label}
				variant={variant}
				type={type}
				helperText={error && helperText}
			/>
		</FormControl>
	)
}

export default TextFieldRex
