import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useContext, useState } from "react"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import Form from "../../../componentes/Form"
import "./styles/TeamAddForm.css"
import { helpHttp } from "../../../helpers/helpHttp"
import { blobToBase64 } from "../../../helpers/blobManager"
import { urlApi } from "../../../functions/globals"
import { PAlert } from "../../../componentes/PAlert"
import LanguajeContext from "../../../contexts/LanguajeContext"
import AlertSuccees from "../../../componentes/AlertSuccees"
import AddAPhotoTwoToneIcon from "@mui/icons-material/AddAPhotoTwoTone"

const formTeamInit = {
	id_deporte: "",
}

const peticion = helpHttp()


const statsFormInit = {
	id_tipoEstadistica: "",
	valor_tipoEstadistica: 0
}

const SportAddForm = () => {
	const [sportForm, setsportForm] = useState(formTeamInit)
	const [errors, setErrors] = useState(null)
	const [ok, setOk] = useState(false)
	const [statsForm, setStatsForm] = useState(statsFormInit)
	const [added, setAdded] = useState(false)
	const [conciben, setconciben] = useState({})
	const [esTanto, setEsTanto] = useState(false)
	const { text } = useContext(LanguajeContext)

	const handleChange = (event) => {
		setsportForm({
			...sportForm,
			[event.target.name]: event.target.value,
		})
	}

	const handleClick = (e) => {


		e.preventDefault()
		const confi = {
			body: new URLSearchParams(sportForm),
		}
		console.log(sportForm)
		peticion.post(urlApi("deportes?"), confi).then((e) => {
			console.log(e.status, "tabla deportes")
			if (e.status == 200) {
				setconciben({ ...conciben, id_deporte_concibe: sportForm.id_deporte })
				setAdded(true)
				setOk(true)
				setErrors(false)
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
		event.preventDefault()
		console.log(statsForm)
		peticion.post(urlApi("tiposEstadisticas?"), { body: new URLSearchParams(statsForm) }).then((res) => {
			console.log(res, "Table estadisticas")
			if (res.status == 200) {
				setOk(true)
				setTimeout(() => {
					setOk(false)
				}, 5000)
			}
		})

		const concibenForm={
			...conciben,
			id_tipoEstadistica_concibe: statsForm.id_tipoEstadistica,
		}
		console.log(concibenForm)

		peticion
			.post(urlApi(`conciben?`), {
				body: new URLSearchParams(concibenForm),
			})
			.then((e) => {
				console.log(e, "Tabla concibenn")
				setStatsForm(statsFormInit)
				if (e.status == 200) {
					
				}
			})
	}

	const handleChangeStat = (e) => {
		e.preventDefault()
		setStatsForm({...statsForm, [e.target.name]: e.target.value })
	}

	const handlePhoto = (e) => {
		blobToBase64(e.target.name, e.target.files, setsportForm, sportForm)
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

					<Button variant="contained" component="label">
						<input name="foto_deporte" onChange={handlePhoto} hidden accept="image/*" type="file" />
						<AddAPhotoTwoToneIcon />
					</Button>
					
					<FormHelperText>Agrega una imagen que se verá en la tarjeta del deporte.</FormHelperText>
					<ButtonClassic type="submit" onClick={handleClick} className="Form__input">
						{text.agregar}
					</ButtonClassic>
				</Form>
			) : (
				<Form>
					
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
					
					<FormControlLabel
						control={
							<Checkbox
								onClick={() => {
									if (!esTanto) {
										setEsTanto(true)
									}else setEsTanto(false)
								}}
							/>
						}
						label="¿Es una estadística de tanto?"
						/>
						{esTanto && (
					<TextField
						helperText={"Ejemplo: en basketball el doble vale '2' puntos"}
						margin="normal"
						type="number"
						sx={{ marginRight: "20px", width: "70%" }}
						id="margin-normal"
						value={statsForm.id_estadistica}
						FormControl
						required
						label="Puntos por tanto"
						onChange={handleChangeStat}
						name="valor_tipoEstadistica"
					></TextField>
					)}
					<Button onClick={handleSendStat} type="submit" variant="contained">
						Añadir
					</Button>
				</Form>
			)}
		</>
	)
}

export default SportAddForm
