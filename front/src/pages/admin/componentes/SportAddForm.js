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

const formTeamInit = {
	id_deporte:""
}

const peticion = helpHttp()

const SportAddForm = () => {
	const [sportForm, setsportForm] = useState(formTeamInit)
	const [errors, setErrors] = useState(null)
	const [ok, setOk] = useState(false)

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

	const handleClick = () => {
		const confi = {
			body: new URLSearchParams(sportForm),
		}
		console.log(sportForm)
		peticion.post(urlApi("deportes?"), confi).then((e) => {
			console.log(e)
			if (e.status == 200) {
				setOk(true)
				setErrors(false)
				setsportForm(formTeamInit)
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
				<h3>{text.agregarDeporte}</h3>
				{errors && <PAlert>{text.error}</PAlert>}
				<TextField
					value={sportForm.id_deporte}
					FormControl
					required
					onChange={handleChange}
					name="id_deporte"
					className="Form__input"
					label={text.nombreDelDeporte}
				></TextField>
				<ButtonClassic onClick={handleClick} className="Form__input">
					{text.agregar}
				</ButtonClassic>
			</Form>
		</>
	)
}

export default SportAddForm
