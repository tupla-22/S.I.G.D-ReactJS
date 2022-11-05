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
	nombre_liga: "",
	id_deporte_liga:"",
}

const peticion = helpHttp()

const  LueagueAddForm = () => {
	const [leagueForm, setleagueForm] = useState(formTeamInit)
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
		setleagueForm({
			...leagueForm,
			[event.target.name]: event.target.value
		})
	}

	const handleClick = () => {
		const confi = {
			body: new URLSearchParams(leagueForm),
		}
		peticion.post(urlApi(`ligas?`), confi).then((e) => {
			console.log(leagueForm)
			if (e.status == 200) {
				setOk(true)
				setErrors(false)
				setleagueForm(formTeamInit)
				
			} else {
				setErrors(true)
				setOk(false)
			}
			setTimeout(() => {
				setOk(false)
				setErrors(false)
			}, 5000)
		})
	}

	return (
		<>
			{ok && <AlertSuccees />}
			{errors && <AlertSuccees severity={"error"}/>}
			<Form>
				<h3>{text.agregarEquipo}</h3>
				<TextField
					value={leagueForm.nombre_liga}
					FormControl
					required
					onChange={handleChange}
					name="nombre_liga"
					className="Form__input"
					label={text.nombreDelEquipo}
				></TextField>
				<FormControl required className="Form__input" fullWidth>
					<InputLabel id="demo-simple-select-label">{text.deporte}</InputLabel>
					<Select
						label={text.deporte}
						name="id_deporte_liga"
						value={leagueForm.id_deporte_liga}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						onChange={handleChange}
					>
						{sports.map(e => <MenuItem value={e.id_deporte}>{e.id_deporte }</MenuItem>)}
					</Select>
				</FormControl>
				<ButtonClassic onClick={handleClick} className="Form__input">
					{text.agregar}
				</ButtonClassic>
			</Form>
		</>
	)
}

export default LueagueAddForm
