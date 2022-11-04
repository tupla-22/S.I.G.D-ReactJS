import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import ListSubheader from "@mui/material/ListSubheader"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

export default function ManagerControlUserSelect({setEquipoDelTanto, form, setForm, locales, visitantes }) {
	const handleChange = (jugador) => {
		setForm({
			...form,
			id_fichaJugador_estadistica: jugador.id_fichaJugador,
			id_equipo_estadistica: jugador.id_equipo,
        })
        
        setEquipoDelTanto(jugador.nombre_equipo)
	}

	return (
		<div>
			<FormControl margin="normal" sx={{ minWidth: 120, width: "100%" }}>
				<InputLabel htmlFor="grouped-select">Jugador al que se le asigna</InputLabel>
				<Select
					onChange={(e) => handleChange(e.target.value)}
					defaultValue=""
					id="grouped-select"
					label="Jugador al que se le asigna"
				>
					<ListSubheader>{locales[0].nombre_equipo}</ListSubheader>
					{locales.map((jugador) => (
						<MenuItem value={jugador}>
							{jugador.primerNombre_usuario} {jugador.primerApellido_usuario}
						</MenuItem>
					))}
					<ListSubheader>{visitantes[0].nombre_equipo}</ListSubheader>
					{visitantes.map((jugador) => (
						<MenuItem value={jugador}>
							{jugador.primerNombre_usuario} {jugador.primerApellido_usuario}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}
