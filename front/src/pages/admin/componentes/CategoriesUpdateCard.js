import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useContext, useState } from "react"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import Form from "../../../componentes/Form"
import "./styles/TeamAddForm.css"
import { helpHttp } from "../../../helpers/helpHttp"
import { blobToBase64 } from "../../../helpers/blobManager"
import LanguajeContext from "../../../contexts/LanguajeContext"
import { urlApi } from "../../../functions/globals"
import AlertSuccees from "../../../componentes/AlertSuccees"

const formTeamInit = {
	nombre_equipo: "",
	id_deporte_equipo: "",
	escudo_equipo: "",
}

const CategoriesUpdateCard = ({ setTeam, data, ok, setOk }) => {
	const [teamForm, setTeamForm] = useState(data)
	const [errors, setErrors] = useState(null)

	const peticion = helpHttp()

	const { text } = useContext(LanguajeContext)

	const handleChange = (event) => {
		setTeamForm({
			...teamForm,
			[event.target.name]: event.target.value,
		})
	}

	const handleEscudo = (e) => {
		blobToBase64(e.target.name, e.target.files, setTeamForm, teamForm)
	}

	const handleClick = () => {
		const confi = { body: new URLSearchParams(teamForm) }
		peticion.put(urlApi(`equipos?id=${teamForm.id_equipo}&nameID=id_equipo`), confi).then((e) => {
			console.log(e.status, "Actualizacion")
			if (e.status == 200) {
				setOk(true)
        setTeam(null)
        setTimeout(() => { setOk(false) }, 5000)
			}
		})
	}

	return (
		<>
			<Form>
				<h3>{text.actualizarEquipos}</h3>
				<TextField
					value={teamForm.nombre_equipo}
					onChange={handleChange}
					name="nombre_equipo"
					className="Form__input"
					label={text.nombreDelEquipo}
				></TextField>
				<FormControl className="Form__input" fullWidth>
					<InputLabel id="demo-simple-select-label">{text.deporte}</InputLabel>
					<Select
						label={text.deporte}
						name="id_deporte_equipo"
						value={teamForm.id_deporte}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						onChange={handleChange}
					>
						<MenuItem value={"handball"}>Handball</MenuItem>
						<MenuItem value={"football"}>football</MenuItem>
						<MenuItem value={"basketball"}>basketball</MenuItem>
					</Select>
				</FormControl>

				<Button className="Form__input" variant="contained" component="label">
					{text.escudoDelEquipo}
					<input
						files={teamForm.escudo_equipo}
						name="escudo_equipo"
						onChange={handleEscudo}
						hidden
						accept="image/*"
						type="file"
					/>
				</Button>
				<ButtonClassic onClick={handleClick} className="Form__input">
					{text.agregar}
				</ButtonClassic>
			</Form>
		</>
	)
}

export default CategoriesUpdateCard
