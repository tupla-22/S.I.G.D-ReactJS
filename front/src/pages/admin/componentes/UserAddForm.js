import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import Form from "../../../componentes/Form"
import InputFechaNacimiento from "../../../componentes/InputFechaNacimiento"
import "./styles/UserAddForm.css"
import UserAddTipeController from "./UserAddTipeController"
import React, { useState, useEffect, useContext } from "react"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import { PAlert } from "../../../componentes/PAlert"
import { blobToBase64 } from "../../../helpers/blobManager"
import { urlApi } from "../../../functions/globals"
import { getToken } from "../../../functions/User"
import { helpHttp } from "../../../helpers/helpHttp"
import { PSuccess } from "../../../componentes/styledComponents/PSuccess"
import InputDate from "../../../componentes/InputDate"
import LanguajeContext from "../../../contexts/LanguajeContext"
import AlertSuccees from "../../../componentes/AlertSuccees"
import { useNavigate } from "react-router-dom"

const userFormInit = {
	ci_usuario: "",
	primerNombre_usuario: "",
	segundoNombre_usuario: "",
	primerApellido_usuario: "",
	segundoApellido_usuario: "",
	fechaNac_usuario: "",
	email_usuario: "",
	password_usuario: "",
	id_rol_usuario: "",
}

const telefonoFormInit = { id_telefono: "", id_usuario_telefono: "" }

const fichaFormInit = {
	altura_fichaJugador: "",
	peso_fichaJugador: "",
	lateralidad_fichaJugador: "",
}

const UserAddForm = () => {
	const [userForm, setUserForm] = useState(userFormInit)
	const [typeUser, setTypeUser] = useState("")
	const [passwordVerified, setPasswordVerified] = useState(true)
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState(false)
	const [error, setError] = useState(false)
	const [created, setCreated] = useState(false)
	const [fichaForm, setFichaForm] = useState(fichaFormInit)
	const [idFichaJugador, setIdFichaJugador] = useState("")
	const [idUsuario, setIdUsuario] = useState("")
	const peticion = helpHttp()
	const [pertenecenForm, setPertenecenForm] = useState({})
	const [telefonoForm, setTelefonoForm] = useState(telefonoFormInit)
	const [ok, setOk] = useState(false)


	const navigate = useNavigate()

	const { text } = useContext(LanguajeContext)

	const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

	const handleClick = (e) => {
		e.preventDefault()
		if (!emailRegex.test(userForm.email_usuario)) setError(true)
		else setError(false)



		if (passwordVerified && !error) {
			const data = {
				body: new URLSearchParams(userForm),
			}

			peticion.post("http://apirest.com/usuarios?register=true&suffix=usuario", data).then((e) => {
				console.log(e.status, "result usuario")

				if (e.status == 200) {
					setOk(true)
					setTimeout(() => {
						setOk(false)
						navigate("../add")
						
					}, 5000)
					setTypeUser("")
					setPasswordVerified(false)
					setCreated(true)
					setIdUsuario(e.result.lastId)
					setUserForm(userFormInit)
					setTelefonoForm({ ...telefonoForm, id_usuario_telefono: e.result.lastId })
				}
			})

			peticion
				.post(urlApi(`fichasJugadores?`), {
					body: new URLSearchParams(fichaForm),
				})
				.then((e) => {
					setIdFichaJugador(e.result.lastId)
					setPertenecenForm({ ...pertenecenForm, id_fichaJugador_pertenece: e.result.lastId })
					console.log(e.status, "result ficha")
					if (e.status == 200) {
						setFichaForm(fichaFormInit)
					}
					if (!created) {
						setCreated(true)
						// setUserForm(userFormInit)
					} else setCreated(false)
				})
		}
	}

	useEffect(() => {
		if (telefonoForm.id_usuario_telefono != "") {
			peticion.post(urlApi(`telefonos?`), { body: new URLSearchParams(telefonoForm) }).then((e) => {
				console.log(e.status, "telefonos")
				if (e.status == 200) {
					setTelefonoForm(telefonoFormInit)
				}
			})
		}
	}, [telefonoForm])

	// INGRESANDO TABLA TIENEN RELACIONADAS ENTRE SI

	useEffect(() => {
		const dataTienen = {
			id_usuario_tiene: idUsuario,
			id_fichaJugador_tiene: idFichaJugador,
		}

		peticion
			.post(urlApi("tienen?"), {
				body: new URLSearchParams(dataTienen),
			})
			.then((e) => {
				console.log(e.status, "result tienen")
				peticion
					.post(urlApi("pertenecen?"), { body: new URLSearchParams(pertenecenForm) })
					.then((e) => console.log(e.status, "result de pertenecen"))
			})
	}, [idFichaJugador])

	// Manejadores

	const handleUser = (e) => {
		setTypeUser(e.target.value)
		setUserForm({ ...userForm, id_rol_usuario: e.target.value })
	}

	const handleChange = (event) => {
		if (event.target.name != "password_usuario") {
			setUserForm({
				...userForm,
				[event.target.name]: event.target.value,
			})
		}
		if (event.target.name == "password_usuario") {
			setUserForm({ ...userForm, [event.target.name]: event.target.value })
		}
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleVerifiedPassword = () => {
		if (userForm.password_usuario == password) {
			setPasswordVerified(true)
			setErrors(true)
		} else setPasswordVerified(false)
	}

	const handlePhoto = (e) => {
		blobToBase64(e.target.name, e.target.files, setUserForm, userForm)
	}

	const handleTelefono = (e) => {
		setTelefonoForm({ ...telefonoForm, [e.target.name]: e.target.value })
	}

	return (
		<>
			{ok && <AlertSuccees />}
			<Form style={{ display: "flex", flexDirection: "column" }} className="userAddForm">
				<h3>{text.agregarUnUsuario}</h3>
				<TextField
					defaultChecked
					required
					value={userForm.ci_usuario}
					onChange={handleChange}
					name="ci_usuario"
					type="number"
					className="Form__input"
					label={text.cedula}
				></TextField>
				<TextField
					required
					defaultChecked
					value={userForm.primerNombre_usuario}
					onChange={handleChange}
					name="primerNombre_usuario"
					className="Form__input"
					label={text.nombre}
				></TextField>
				<TextField
					value={userForm.segundoNombre_usuario}
					onChange={handleChange}
					name="segundoNombre_usuario"
					className="Form__input"
					label={text.segundoNombre}
				></TextField>
				<TextField
					defaultChecked
					required
					value={userForm.primerApellido_usuario}
					onChange={handleChange}
					name="primerApellido_usuario"
					className="Form__input"
					label={text.apellido}
				></TextField>
				<TextField
					value={userForm.segundoApellido_usuario}
					onChange={handleChange}
					name="segundoApellido_usuario"
					className="Form__input"
					label={text.segundoApellido}
				></TextField>
				<TextField
					defaultChecked
					error={error && "true"}
					helperText={error && "Email requerido"}
					required
					value={userForm.email_usuario}
					onChange={handleChange}
					name="email_usuario"
					className="Form__input"
					label={text.correoElectronico}
					type="email"
				></TextField>

				<TextField
					required
					value={telefonoForm.id_telefono}
					onChange={handleTelefono}
					name="id_telefono"
					type="number"
					className="Form__input"
					label={text.numeroTelefonico}
				></TextField>
				<InputDate
					required
					label={text.fechaDeNacimiento}
					name={"fechaNac_usuario"}
					form={userForm}
					setForm={setUserForm}
				></InputDate>

				{/* <TextField onChange={handleChange} name="tel" type="number" className="Form__input" label="Telefono"></TextField> */}
				<TextField
					required
					onBlur={handleVerifiedPassword}
					onChange={handleChange}
					name="password_usuario"
					className="Form__input"
					type="password"
					label={text.contraseña}
				></TextField>
				{!passwordVerified && <PAlert>Los campos contraseña no coinciden</PAlert>}
				<TextField
					required
					onChange={handlePassword}
					onBlur={handleVerifiedPassword}
					name="password_usuario_verified"
					className="Form__input"
					type="password"
					label={text.repetirContraseña}
				></TextField>

				<FormControl className="Form__input">
					<InputLabel required id="demo-simple-select-label">
						{text.tipoDeUsuario}
					</InputLabel>
					<Select
						value={typeUser}
						defaultChecked
						name="id_rol_usuario"
						label={text.tipoDeUsuario}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						onChange={handleUser}
					>
						<MenuItem value={2}>{text.administrador}</MenuItem>
						<MenuItem value={3}>{text.estudiante}</MenuItem>
						<MenuItem value={4}>{text.reclutador}</MenuItem>
						<MenuItem value={5}>{text.juez}</MenuItem>
						<MenuItem value={6}>{text.directorTecnico}</MenuItem>
						<MenuItem value={7}>{text.analista}</MenuItem>
					</Select>
				</FormControl>
				<UserAddTipeController
					pertenecenForm={pertenecenForm}
					setPertenecenForm={setPertenecenForm}
					setForm={setFichaForm}
					form={fichaForm}
					className="Form__input"
					tipeUser={typeUser}
				/>

				<InputDate
					label={text.carnetDeSaludValido}
					name={"carneSalud_usuario"}
					form={userForm}
					setForm={setUserForm}
				></InputDate>
				<Button variant="contained" component="label">
					{text.fotoDePerfil}
					<input name="fotoPerfil_usuario" onChange={handlePhoto} hidden accept="image/*" type="file" />
					<PhotoCamera />
				</Button>

				<ButtonClassic type="submit" variant="contained" onClick={handleClick}>
					{text.agregar}
				</ButtonClassic>
			</Form>
		</>
	)
}

export default UserAddForm
