import { Button, TextField } from "@mui/material"
import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import { ButtonClassic } from "./ButtonClassic"
import FormCien from "./FormCien"
import React, { useState } from "react"

import "./styles/ChangePasswordForm.css"
import { helpHttp } from "../helpers/helpHttp"
import { passwordVerifier, urlApi } from "../functions/globals"
import { PSuccess } from "./styledComponents/PSuccess"
import { PAlert } from "./PAlert"
import LanguajeContext from "../contexts/LanguajeContext"
import AlertSuccees from "./AlertSuccees"
const FormPasswordChange = () => {
	const [password, setPassword] = useState("")
	const [password2, setPassword2] = useState("")
	const [verified, setVerified] = useState(null)
	const [error, setError] = useState(null)
	const [ok, setOk] = useState(false)
	const user = JSON.parse(localStorage.getItem("user"))

	const { text } = useContext(LanguajeContext)

	const peticion = helpHttp()

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(passwordVerifier(password, password2))

		if (passwordVerifier(password, password2)) {
			const usuario = { password_usuario: password }

			const conf = {
				body: new URLSearchParams(usuario),
			}
			peticion.put(urlApi(`usuarios?id=${user.id_usuario}&nameID=id_usuario`), conf).then((e) => {
				console.log(e)
				if (e.status == 200) {
					setOk(true)
					setTimeout(() => {
						setOk(false)
					}, 5000)
				}
			})
			setVerified(true)
		} else setError(true)
	}

	const handleChange = (e) => {
		if (e.target.name == "password_usuario") {
			setPassword(e.target.value)
		}
		if (e.target.name == "passwordVerifier") {
			setPassword2(e.target.value)
		}
	}

	return (
		<>
			{ok && <AlertSuccees />}

			<FormCien>
				{error && <PAlert>{text.lasContraseñasNoCoinciden}</PAlert>}
				<h3>{text.cambiarContraseña}</h3>
				<TextField
					type="password"
					className="FormCien__input"
					label={text.nuevaContraseña}
					name="password_usuario"
					onChange={handleChange}
				/>
				<TextField
					type="password"
					label={text.repitaNuevaContraseña}
					className="FormCien__input"
					name="passwordVerifier"
					onChange={handleChange}
				/>
				<ButtonClassic type="submit" onClick={handleSubmit}>
					{text.cambiar}
				</ButtonClassic>
			</FormCien>
		</>
	)
}

export default FormPasswordChange
