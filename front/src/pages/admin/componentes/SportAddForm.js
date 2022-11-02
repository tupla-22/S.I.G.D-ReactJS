import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useContext, useState } from "react"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import Form from "../../../componentes/Form"
import "./styles/TeamAddForm.css"
import { helpHttp } from "../../../helpers/helpHttp"
import { blobToBase64 } from "../../../helpers/blobManager"
import { urlApi } from "../../../functions/globals"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import { PSuccess } from "../../../componentes/styledComponents/PSuccess"
import { PAlert } from "../../../componentes/PAlert"
import LanguajeContext from "../../../contexts/LanguajeContext"
import AlertSuccees from "../../../componentes/AlertSuccees"
import { BoxFlex } from "../../../componentes/BoxFlex"
import { BoxAlCen } from "../../../componentes/styledComponents/ComponentesDeEstilos"

const formTeamInit = {
	id_deporte: "",
}

const peticion = helpHttp()

const SportAddForm = () => {
	const [sportForm, setsportForm] = useState(formTeamInit)
	const [errors, setErrors] = useState(null)
	const [ok, setOk] = useState(false)
	const [statsForm, setStatsForm] = useState({})
	const [added, setAdded] = useState(false)
	const [conciben, setconciben] = useState({});

	const { text } = useContext(LanguajeContext)

	const handleChange = (event) => {
		setsportForm({
			...sportForm,
			[event.target.name]: event.target.value,
		})
	}

	const handleEscudo = (e) => {
		blobToBase64(e.target.name, e.target.files, setsportForm, sportForm)
	}

	const handleClick = (e) => {
		e.preventDefault()
		const confi = {
			body: new URLSearchParams(sportForm),
		}
		console.log(sportForm)
		peticion.post(urlApi("deportes?"), confi).then((e) => {
			console.log(e.status,"tabla deportes")
			if (e.status == 200) {
				setconciben({...conciben,id_deporte_concibe:sportForm.id_deporte})
				setAdded(true)
				setOk(true)
				setErrors(false)
				setsportForm(formTeamInit)
				setTimeout(() => {
					setOk(false)
				}, 5000)
			} else {
				setErrors(true)
				setOk(false)
			}
		})
	}

	const handleSendStat = (event) => {
		event.preventDefault(event)


		peticion.post(urlApi("tiposestadisticas?"), { body: new URLSearchParams(statsForm) }).then(res => {
			console.log(res.status,"Table estadisticas")
			if (res.status == 200) {
				peticion.post(urlApi(`conciben?`), { body: new URLSearchParams({ ...conciben, id_tipoEstadistica_concibe: statsForm.id_tipoEstadistica }) }).then(e => {
					console.log(e.status,"Tabla concibenn")
			  })
			}
		})


	}

	const handleChangeStat = (e) => {
		e.preventDefault()
		setStatsForm({[e.target.name]:e.target.value})
	}

	return (
		<>
			{ok && <AlertSuccees />}
			{!added ? (
				<Form>
					<h3>{text.agregarDeporte}</h3>
					{errors && <PAlert>{text.error}</PAlert>}
					<TextField
						value={sportForm.id_deporte}
						FormControl
						required
						onChange={handleChange}
						name="id_deporte"
						margin="normal"
						label={text.nombreDelDeporte}
					></TextField>
					<ButtonClassic type="submit" onClick={handleClick} className="Form__input">
						{text.agregar}
					</ButtonClassic>
				</Form>
			) : (
				<Form>
					<BoxAlCen>
						<TextField
							margin="normal"
							sx={{ marginRight: "20px", width: "70%" }}
							id="margin-normal"
							value={statsForm.id_estadistica}
							FormControl
							required
							label="Nombre de la estadística"
							onChange={handleChangeStat}
							name="id_tipoEstadistica"
						></TextField>
						<Button onClick={handleSendStat} type="submit" variant="contained">Añadir</Button>
					</BoxAlCen>
				</Form>
			)}
		</>
	)
}

export default SportAddForm
