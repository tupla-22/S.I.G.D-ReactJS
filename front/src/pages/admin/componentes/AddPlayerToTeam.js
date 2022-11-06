import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useContext, useState, useEffect } from "react"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import Form from "../../../componentes/Form"
import "./styles/TeamAddForm.css"
import { helpHttp } from "../../../helpers/helpHttp"
import { blobToBase64 } from "../../../helpers/blobManager"
import { getUser, urlApi } from "../../../functions/globals"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import { PAlert } from "../../../componentes/PAlert"
import LanguajeContext from "../../../contexts/LanguajeContext"
import AlertSuccees from "../../../componentes/AlertSuccees"

const formTeamInit = {
	nombre_equipo: "",
	id_deporte_equipo: null,
	escudo_equipo: "",
	id_usuario_equipo:""
}

const peticion = helpHttp()

const AddPlayerToTeam = () => {
	const [teamForm, setTeamForm] = useState(formTeamInit)
	const [errors, setErrors] = useState(null)
	const [ok, setOk] = useState(false)
	const [sports, setSports] = useState([]);

	const { text } = useContext(LanguajeContext)
	const peticion = helpHttp()
	const user  = getUser()

	useEffect(() => {
		peticion.get(urlApi("deportes?")).then(e => {
			if (e.status = 200) {
				setSports(e.result)
			}
		})
	}, []);

	const handleChange = (event) => {
		setTeamForm({
			...teamForm,
			[event.target.name]: event.target.value,
			id_usuario_equipo:user.id_usuario
		})
	}

	const handleEscudo = (e) => {
		blobToBase64(e.target.name, e.target.files, setTeamForm, teamForm)
	}

	const handleClick = () => {
		const confi = {
			body: new URLSearchParams(teamForm),
		}
		peticion.post(urlApi("equipos?"), confi).then((e) => {
			if (e.status == 200) {
				setOk(true)
				setErrors(false)
				setTeamForm(formTeamInit)
				setTimeout(() => {setOk(false)}, 5000)
			} else {
				setErrors(true)
				setOk(false)
			}
		})
	}

	return (
		<>
			{ok && <AlertSuccees />}
			<Form>
				<h3>{text.agregarEquipo}</h3>
				{errors && <PAlert>{text.error}</PAlert>}
				<TextField
					value={teamForm.nombre_equipo}
					FormControl
					required
					onChange={handleChange}
					name="nombre_equipo"
					className="Form__input"
					label={text.nombreDelEquipo}
				></TextField>
				<FormControl required className="Form__input" fullWidth>
					<InputLabel id="demo-simple-select-label">{text.deporte}</InputLabel>
					<Select
						label={text.deporte}
						name="id_deporte_equipo"
						value={teamForm.id_deporte_equipo}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						onChange={handleChange}
					>
						{sports.map(e => <MenuItem value={e.id_deporte}>{e.id_deporte }</MenuItem>)}
					</Select>
				</FormControl>

				<Button className="Form__input" variant="contained" component="label">
					{text.escudoDelEquipo} <CameraAltIcon />
					<input name="escudo_equipo" onChange={handleEscudo} hidden accept="image/*" type="file" />
				</Button>
				<ButtonClassic onClick={handleClick} className="Form__input">
					{text.agregar}
				</ButtonClassic>
			</Form>
		</>
	)
}

export default AddPlayerToTeam
