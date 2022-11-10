import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import ListSubheader from "@mui/material/ListSubheader"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { IconFoto } from "../../../componentes/styledComponents/IconFoto"
import { IconSelect } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import { FormHelperText } from "@mui/material"

export default function ManagerControlTeamSelect({error, form, setForm, teams }) {
	const handleChange = (element) => {
        setForm({ ...form, id_equipo_estadistica: element })
	}

	return (
		<div>
            <FormControl  margin="normal" sx={{ minWidth: 120, width: "100%" }}>
				<InputLabel  htmlFor="grouped-select">Equipo al que le pertenece</InputLabel>
                <Select
					onChange={(e) => handleChange(e.target.value)}
					defaultValue=""
					id="grouped-select"
					label="Equipo al que le pertenece"
				>
					{teams.map((team) => (
						<MenuItem value={team.id}>
                            {team.nombre}
						</MenuItem>
					))}
                </Select>
                <FormHelperText>Ingresa el equipo</FormHelperText>
			</FormControl>
		</div>
	)
}
