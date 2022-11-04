import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import ListSubheader from "@mui/material/ListSubheader"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { IconFoto } from "../../../componentes/styledComponents/IconFoto"
import { IconSelect } from "../../../componentes/styledComponents/ComponentesDeEstilos"

export default function ManagerControlStatSelect({matchForm,setMatchForm,setvalorDelTanto,setTanto , form, setForm, stats,locales,visitantes }) {
	const handleChange = (element) => {

		setForm({ ...form, valor_estadistica: element.valor_tipoEstadistica, tipo_estadistica: element.id_tipoEstadistica })
		console.log(element.valor_tipoEstadistica)
			setvalorDelTanto(element.valor_tipoEstadistica)
	}

	return (
		<div>
			<FormControl margin="normal" sx={{ minWidth: 120, width: "100%" }}>
				<InputLabel htmlFor="grouped-select">Estadística</InputLabel>
				<Select
					onChange={(e) => handleChange(e.target.value)}
					defaultValue=""
					id="grouped-select"
					label="Estadística"
				>
					{stats.map((stat) => (
						<MenuItem value={stat}>
							{stat.id_tipoEstadistica} {<IconSelect src={stat.icono_tipoEstadistica}></IconSelect>}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}
