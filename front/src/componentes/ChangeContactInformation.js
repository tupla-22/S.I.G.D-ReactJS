import { Button, TextField } from "@mui/material"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { getUser, urlApi } from "../functions/globals"
import { helpHttp } from "../helpers/helpHttp"
import AlertSuccees from "./AlertSuccees"
import { ButtonClassic } from "./ButtonClassic"
import { B, BoxColCen, H3B } from "./styledComponents/ComponentesDeEstilos"
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone"
import MarkEmailReadTwoToneIcon from "@mui/icons-material/MarkEmailReadTwoTone"
import ChangeCircleTwoToneIcon from "@mui/icons-material/ChangeCircleTwoTone"
const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 900px) {
		& {
			align-items: center;
		}
	}
`

const Div = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 50%;
	justify-content: flex-start;
`

const Div2 = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	padding: 25px;
`

const Div3 = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
`
const BoxCen = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`
const DivHe = styled.div`
	&:hover {
		cursor: pointer;
	}
	display: flex;
	align-items: center;
`

const addTelFormInit = {
	id_telefono: "",
	id_usuario_telefono: "",
}
const emailFormInit = {
	email_usuario: "",
}

const ChangeContactInformation = () => {
	const peticion = helpHttp()
	const [telefonos, setTelefonos] = useState([])
	const [addTelForm, setAddTelForm] = useState(addTelFormInit)
	const [ok, setOk] = useState(false)
	const [telLength, setTelLength] = useState(0)
	const [changeEmail, setChangeEmail] = useState(false)
    const [email, setEmail] = useState(emailFormInit)


    const user = getUser()
	useEffect(() => {
		peticion
			.get(urlApi(`telefonos?select=id_telefono&linkTo=id_usuario_telefono&equalTo=${user.id_usuario}`))
			.then((e) => {
				console.log(e)
				if (e.status == 200) {
					setTelefonos(e.result)
				}
            })
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(addTelForm)
		peticion.post(urlApi(`telefonos?`), { body: new URLSearchParams(addTelForm) }).then((e) => {
			console.log(e)
			if (e.status == 200) {
				setTelefonos([...telefonos, addTelForm])
				setOk(true)
				setTimeout(() => {
					setOk(false)
				}, 5000)
				setAddTelForm(addTelFormInit)
			}
		})
    }
    
    const handleEmail = (e) => {
        setEmail({...email,[e.target.name]:e.target.value})
    }
    const handleSubmitEmail = (event) => {
        event.preventDefault()
        peticion.put(urlApi(`usuarios?id=${user.id_usuario}&nameID=id_usuario`), { body: new URLSearchParams(email) }).then((e) => {
			console.log(e)
            if (e.status == 200) {
                localStorage.setItem("user",JSON.stringify({ ...user, ...email }))
                console.log(user)
                setOk(true)
                setEmail(emailFormInit)
				setTimeout(() => {
					setOk(false)
				}, 5000)
			}
		})
    }

	const handleAddNum = (e) => {
		setAddTelForm({ ...addTelForm, id_usuario_telefono: user.id_usuario, [e.target.name]: e.target.value })
	}

	return (
		<>
			{ok && <AlertSuccees />}
			<Container>
				<Div2>
					<Div>
						{telefonos.length < 3 && (
							<form style={{ display: "flex", alignItems: "center" }}>
                                <TextField
                                    defaultChecked
									value={addTelForm.id_telefono}
									size="small"
									name="id_telefono"
									onChange={handleAddNum}
									type={"number"}
									label="Agregar número"
								/>
								<ButtonClassic type="submit" onClick={handleSubmit} sx={{ margin: "15px" }}>
									Agregar
								</ButtonClassic>
							</form>
						)}
					</Div>
					<Div3>
						<b>Numeros telefónicos:</b>
						{telefonos.map((e) => (
							<BoxCen>
								<DivHe>
									<HighlightOffTwoToneIcon
										color="error"
										onClick={() => {
											peticion
												.del(
													urlApi(`telefonos?id=${e.id_telefono}&nameID=id_telefono`)
												)
												.then((res) => {
													console.log(res, "eliminado")
													if (res.status == 200) {
														setOk(true)
														setTimeout(() => {
															setOk(false)
														}, 5000)
														setTelefonos(
															telefonos.filter(
																(ele) => ele.id_telefono != e.id_telefono
															)
														)
													}
												})
										}}
									/>
								</DivHe>
								<B> {e.id_telefono} </B>
							</BoxCen>
						))}
					</Div3>
				</Div2>

				<Div2>
					<Div3>
						{changeEmail && (
							<form style={{ display: "flex", alignItems: "center" }}>
								<BoxCen>
									<TextField
										value={email.email_usuario}
										size="small"
										name="email_usuario"
										onChange={handleEmail}
										type={"email"}
										label="Cambiar corréo"
									/>
									<ButtonClassic type="submit" onClick={handleSubmitEmail} sx={{ margin: "15px" }}>
										Agregar
									</ButtonClassic>
								</BoxCen>{" "}
							</form>
						)}

						<BoxCen>
							<DivHe>
								<ChangeCircleTwoToneIcon
									onClick={() => {
										setChangeEmail(true)
									}}
									color="success"
								/>
							</DivHe>
							<B>Correo electronico: {user.email_usuario}</B>
						</BoxCen>
					</Div3>
				</Div2>
			</Container>
		</>
	)
}

export default ChangeContactInformation
