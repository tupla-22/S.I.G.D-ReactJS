import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import Form from "../../../componentes/Form"
import "./styles/UserAddForm.css"
import UserAddTipeController from "./UserAddTipeController"
import React, { useState, useEffect, useContext } from "react"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import { PAlert } from "../../../componentes/PAlert"
import { blobToBase64 } from "../../../helpers/blobManager"
import { urlApi } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import InputDate from "../../../componentes/InputDate"
import LanguajeContext from "../../../contexts/LanguajeContext"
import AlertSuccees from "../../../componentes/AlertSuccees"
import { useNavigate } from "react-router-dom"
import TextFieldRex from "../../../componentes/TextField"

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
	const [error, setError] = useState(false)
	const [fichaForm, setFichaForm] = useState(fichaFormInit)
	const [pertenecenForm, setPertenecenForm] = useState({})
	const [telefonoForm, setTelefonoForm] = useState(telefonoFormInit)
	const [ok, setOk] = useState(false)
	const [ci, setCi] = useState({})
	const [errors, setErrors] = useState({})
	const { text } = useContext(LanguajeContext)
	const peticion = helpHttp()

	const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
	const ciRegex = /^(\d){5,8}$/
	const telRegex = /^(\d){5,10}$/
	const textRegex = /^(.){1,20}$/i
	const textNullRegex = /^(.){0,20}$/i
	const passRegex = /^(.){1,50}$/i

	useEffect(() => {
		console.log()
	}, [errors])
	const handleClick = (e) => {
		e.preventDefault()
		console.log(Object.values(errors).find(e=>e==true))
		let idUsuario
		let idUltimaFichaJugador

		// SI LA CONTRASEÑA ES IGUAL AÑADO EL USUAIRIO Y TODDO EL RESTO

		if (!Object.values(errors).find(e=>e==true)) {
			if (passwordVerified) {
				const data = {
					body: new URLSearchParams(userForm),
				}

				peticion.post(urlApi("usuarios?register=true&suffix=usuario"), data).then((e) => {
					console.log(e, "result usuario")

					if (e.status == 200) {
						setPasswordVerified(false)
						idUsuario = e.result.lastId

						// AÑADO EL TELEFONO EN SU TABLA
						const formTelefono = {
							body: new URLSearchParams({ ...telefonoForm, id_usuario_telefono: e.result.lastId }),
						}
						if (telefonoForm.id_telefono != "") {
							peticion.post(urlApi(`telefonos?`), formTelefono).then((e) => {
								console.log(e, "telefonos")
								if (e.status == 200) {
									setTelefonoForm(telefonoFormInit)
								}
							})
						}

						//AÑADIMOS EN LA TANBLA DE FICHAS DE JUGADOR

						peticion
							.post(urlApi(`fichasJugadores?`), {
								body: new URLSearchParams(fichaForm),
							})
							.then((e) => {
								console.log(e, "result ficha")
								if (e.status == 200) {
									idUltimaFichaJugador = e.result.lastId
									const infoPerenecen = {
										body: new URLSearchParams({
											...pertenecenForm,
											id_fichaJugador_pertenece: idUltimaFichaJugador,
										}),
									}
									//AÑADIMOS A LA RELACION DE FIHCAS JUGADORES Y USUARIOS

									const dataTienen = {
										id_usuario_tiene: idUsuario,
										id_fichaJugador_tiene: e.result.lastId,
									}
									peticion
										.post(urlApi("tienen?"), {
											body: new URLSearchParams(dataTienen),
										})
										.then((e) => {
											console.log(e, "result tienen")
											if (e.status == 200) {
												peticion
													.post(urlApi("pertenecen?"), infoPerenecen)
													.then((e) => console.log(e, "result de pertenecen"))
											}
										})

									setFichaForm(fichaFormInit)
								}
							})

						//AÑADIMOS EN LA RELACION FICHASJUGADORES

						setUserForm(userFormInit)
						setOk(true)
						setTimeout(() => {
							setOk(false)
						}, 4000)
						setTypeUser("")
						setUserForm(userFormInit)
						setPassword("")
						setPasswordVerified(true)
						setError(false)
					}
				})
			}
		} else {
			console.log(errors)
	}}

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
			setError(true)
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
				<TextFieldRex
					name={"ci_usuario"}
					label={"Cédula"}
					regex={ciRegex}
					form={userForm}
					setForm={setUserForm}
					setErrors={setErrors}
					errors={errors}
					value={userForm.ci_usuario}
					helperText="Única y debe tener de 4 a 8 números"
					required={true}
				/>
				<TextFieldRex
					name={"primerNombre_usuario"}
					label={text.nombre}
					regex={textRegex}
					form={userForm}
					setForm={setUserForm}
					setErrors={setErrors}
					errors={errors}
					value={userForm.primerNombre_usuario}
					required={true}
				/>
				<TextFieldRex
					name={"segundoNombre_usuario"}
					label={text.segundoNombre}
					regex={textNullRegex}
					form={userForm}
					setForm={setUserForm}
					setErrors={setErrors}
					errors={errors}
					value={userForm.segundoNombre_usuario}
				/>
				<TextFieldRex
					name={"primerApellido_usuario"}
					label={text.apellido}
					regex={textRegex}
					form={userForm}
					setForm={setUserForm}
					setErrors={setErrors}
					errors={errors}
					value={userForm.primerApellido_usuario}
					required={true}
				/>

				<TextFieldRex
					name={"segundoApellido_usuario"}
					label={text.segundoApellido}
					regex={textNullRegex}
					form={userForm}
					setForm={setUserForm}
					setErrors={setErrors}
					errors={errors}
					value={userForm.segundoApellido_usuario}
					required={true}
				/>

				<TextFieldRex
					name={"email_usuario"}
					label={text.correoElectronico}
					regex={emailRegex}
					form={userForm}
					setForm={setUserForm}
					setErrors={setErrors}
					errors={errors}
					value={userForm.email_usuario}
					required={true}
					type="email"
					helperText={"El corréo debe ser único"}
				/>

				<TextFieldRex
					name={"id_telefono"}
					label={text.numeroTelefonico}
					regex={telRegex}
					form={telefonoForm}
					setForm={setTelefonoForm}
					setErrors={setErrors}
					errors={errors}
					value={telefonoForm.id_telefono}
					required={true}
				/>
	
				<InputDate
					ok={ok}
					required
					label={text.fechaDeNacimiento}
					name={"fechaNac_usuario"}
					form={userForm}
					setForm={setUserForm}
				></InputDate>

				{/* <TextField onChange={handleChange} name="tel" type="number" className="Form__input" label="Telefono"></TextField> */}
				
				
				<TextFieldRex
					name="password_usuario"
					label={text.contraseña}
					regex={passRegex}
					form={userForm}
					setForm={setUserForm}
					setErrors={setErrors}
					errors={errors}
					value={userForm.password_usuario}
					required={true}
					onBlur={handleVerifiedPassword}
					type={"password"}
				/>
				{!passwordVerified && <PAlert>Los campos contraseña no coinciden</PAlert>}
				<TextField
					required
					value={password}
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
					<FormHelperText>Debe de ingresar el rol del usuario</FormHelperText>
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
					required
					ok={ok}
					label={text.carnetDeSaludValido}
					name={"carneSalud_usuario"}
					form={userForm}
					setForm={setUserForm}
					helperText="Solo si eres estudiante o DT"
				></InputDate>
				<Button variant="contained" component="label">
					{text.fotoDePerfil}
					<input name="fotoPerfil_usuario" onChange={handlePhoto} hidden accept="image/*" type="file" />
					<PhotoCamera />
				</Button>

				<ButtonClassic type="submit" variant="contained" onClick={handleClick}>
					{text.agregar}
				</ButtonClassic>
				<FormHelperText>Recuerda que los campos marcados con * son requeridos</FormHelperText>
			</Form>
		</>
	)
}

export default UserAddForm
