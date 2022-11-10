import { Button } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom"
import "./styles/FormLogin.css"
import { useContext, useState } from "react"
import RecoverPassword from "./RecoverPassword"
import { PAlert } from "./PAlert"
import UserContext from "../contexts/UserContext"
import Form from "./Form"
import PasswordInput from "./PasswordInput"
import LanguajeContext from "../contexts/LanguajeContext"
import TextFieldRex from "./TextField"
import { urlApiSinToken } from "../functions/globals"

const FormLogin = () => {
	const [errors, setErrors] = useState({ errors: false, correct: false })
	const [usuario, setUsuario] = useState({ password_usuario: "", ci_usuario: "" })
	const navigate = useNavigate()

	const { user, setUser } = useContext(UserContext)
	const { text } = useContext(LanguajeContext)

	const ciRegex = /^(\d){1,8}$/

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = new URLSearchParams(usuario)

		const options = {
			method: "POST",
			headers: { "Content-type": "application/x-www-form-urlencoded;charset-UTF-8" },
			body: data,
		}
		if (!errors.errors) {
			const getUser = async () => {
				const resp = await fetch(urlApiSinToken(`usuarios?login=true&suffix=usuario`), options)
					.then((e) => e.json())
					.then((e) => {
						if (e.status == 200) {
							let resultUser = e.result[0]

							setErrors({ ...errors, correct: false })
							localStorage.setItem("user", JSON.stringify(resultUser))
							setUser(resultUser)
							switch (Number.parseInt(resultUser.id_rol_usuario)) {
								case 1:
									navigate(`/admin/${resultUser.id_usuario}/home`)
									break
								case 2:
									navigate(`/administrative/${resultUser.id_usuario}/home`)
									break
								case 3:
									navigate(`/student/${resultUser.id_usuario}/home`)
									break
								case 4:
									navigate(`/scout/${resultUser.id_usuario}/home`)
									break
								case 5:
									navigate(`/judge/${resultUser.id_usuario}/home`)
									break
								case 6:
									navigate(`/dt/${resultUser.id_usuario}/home`)
									break
								case 7:
									navigate(`/analist/${resultUser.id_usuario}/home`)
									break
							}
						} else setErrors({ ...errors, correct: true })
					})
			}
			getUser()
		}
	}

	const handleChange = (e) => {
		setUsuario({ ...usuario, [e.target.name]: e.target.value })
	}

	return (
		<Form>
			{errors.correct && <PAlert>{text.cedulaError}</PAlert>}
			<TextFieldRex
				regex={ciRegex}
				name="ci_usuario"
				label={text.cedula}
				variant="outlined"
				form={usuario}
				setForm={setUsuario}
				helperText={text.elCampoCedulaSoloAceptaNumerosYHasta8Caracteres}
				setErrors={setErrors}
				errors={errors}
			/>
			<PasswordInput
				text={text}
				setErrors={setErrors}
				errors={errors}
				setUsuario={setUsuario}
				usuario={usuario}
			/>
			<Box>
				<RecoverPassword>{text.problemasParaIniciarSesion}</RecoverPassword>
			</Box>
			<Button type="submit" onClick={handleSubmit} className="Form__input" variant="contained">
				{text.entrar}
			</Button>
		</Form>
	)
}

export default FormLogin
