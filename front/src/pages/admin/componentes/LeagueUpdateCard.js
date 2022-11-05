import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useContext, useState, useEffect } from "react"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import Form from "../../../componentes/Form"
import { helpHttp } from "../../../helpers/helpHttp"
import { blobToBase64 } from "../../../helpers/blobManager"
import { getUser, urlApi } from "../../../functions/globals"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import { PAlert } from "../../../componentes/PAlert"
import LanguajeContext from "../../../contexts/LanguajeContext"
import AlertSuccees from "../../../componentes/AlertSuccees"

const formleagueInit = {
	nombre_liga: "",
	id_deporte_liga: "",
	id_liga:""
}

const peticion = helpHttp()

const  LeagueUpdateCard = ({setError,setOk,setleague,league}) => {
	const [leagueForm, setleagueForm] = useState(league)
	const [sports, setSports] = useState([]);
	const { text } = useContext(LanguajeContext)
	const peticion = helpHttp()
	const user  = getUser()

	useEffect(() => {

		console.log(leagueForm)
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
		peticion.put(urlApi(`ligas?id=${leagueForm.id_liga}&nameID=id_liga`), confi).then((e) => {
			console.log(e,"actualizacion")
			if (e.status == 200) {
				setOk(true)
				setleagueForm(formleagueInit)
				setleague(null)
				
			} else {
				setError(true)
			}
			setTimeout(() => {
				setOk(false)
				setError(false)
			}, 5000)
		})
	}

	return (
		<>
			<Form>
				<h3>{text.agregarLiga}</h3>
				<TextField
					value={leagueForm.nombre_liga}
					FormControl
					required
					onChange={handleChange}
					name="nombre_liga"
					className="Form__input"
					label={text.nombreDeLaLiga}
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

export default LeagueUpdateCard
