import "./styles/Profile.css"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { Button } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"
import { blobToBase64 } from "../helpers/blobManager"
import React, { useState, useEffect, useContext } from "react"
import { helpHttp } from "../helpers/helpHttp"
import { getUser, urlApi } from "../functions/globals"
import styled from "styled-components"
import LanguajeContext from "../contexts/LanguajeContext"
import { BoxFilas } from "./styledComponents/ComponentesDeEstilos"
import { setISOWeek } from "date-fns"
import AlertSuccees from "./AlertSuccees"
import AddAPhotoTwoToneIcon from "@mui/icons-material/AddAPhotoTwoTone"

const peticion = helpHttp()

const Img = styled.img`
	object-fit: contain;
	border-radius: 100%;
	height: 200px;
	width: 200px;
`

const Profile = () => {
	const [photo, setPhoto] = useState({})
	const [ok, setOk] = useState(false)
	const { text } = useContext(LanguajeContext)

	const stAvatar = {
		borderRadius: "100%",
		height: "200px",
		width: "200px",
	}
	const stButton = {
		backgroundColor: "secondary.main",
		"&:hover": {
			backgroundColor: "secondary.main",
			opacity: [0.9, 0.8, 0.7],
		},
		margin: "10px",
	}
	const stIcon = { height: "100%", width: "100%", color: "#0005" }

	const navigate = useNavigate()

	const handlePassword = () => {}

	const user = JSON.parse(localStorage.getItem("user"))

	const handlePhoto = (e) => {
		blobToBase64("fotoPerfil_usuario", e.target.files, setPhoto, photo)
	}

	useEffect(() => {
		if (photo.fotoPerfil_usuario !== "") {
			peticion
				.put(urlApi(`usuarios?id=${user.id_usuario}&nameID=id_usuario`), { body: new URLSearchParams(photo) })
				.then((e) => {
					console.log(e.status, "Foto de peril de usuario")
					if (e.status == 200) {
						setOk(true)
						setTimeout(() => {
							setOk(false)
						}, 5000)
						user.fotoPerfil_usuario = photo.fotoPerfil_usuario
						localStorage.setItem("user", JSON.stringify(user))
					}
				})
		}
	}, [photo])

	return (
		<>
			{ok && <AlertSuccees />}
			<div className="profile">
				<div className="section">
					<div className="profile__avatar">
						<form>
							<Button sx={stAvatar} variant="contained" component="label">
								<AddAPhotoTwoToneIcon
									fontSize="large"
									sx={{ opacity: "50%", position: "absolute" }}
								/>
								<Img src={user.fotoPerfil_usuario}></Img>
								<input onChange={handlePhoto} hidden accept="image/*" type="file" />
							</Button>
						</form>
					</div>
					<h3>
						{user.primerNombre_usuario} {user.primerApellido_usuario}
					</h3>
					<BoxFilas>
						<Button onClick={() => navigate("contactInformation")} sx={stButton} variant="contained">
							{text.datosDeContacto}
						</Button>
						<Button onClick={() => navigate("changePassword")} sx={stButton} variant="contained">
							{text.cambiarContraseña}
						</Button>
					</BoxFilas>
				</div>
				<div className="section ">
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default Profile
