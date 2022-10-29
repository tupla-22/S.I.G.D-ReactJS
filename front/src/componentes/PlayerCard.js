import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import VisibilityIcon from "@mui/icons-material/Visibility"
import LanguajeContext from "../contexts/LanguajeContext"
import styled from "styled-components"
import { IconFoto } from "./styledComponents/IconFoto"
import { useState, useEffect } from "react"
import { helpHttp } from "../helpers/helpHttp"
import { urlApi } from "../functions/globals"
import { H3 } from "./styledComponents/H3"
import { unstable_requirePropFactory } from "@mui/utils"

const Container = styled.section`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	box-shadow: 24;
	padding: 50px;
	border-radius: 15px;
	background-color: #fff;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-auto-rows: minmax(200px, auto);
	@media screen and (max-width: 800px) {
		& {
			width: 90%;
		}
	}
`

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "90%",
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	borderRadius: "15px",
}

const Picture = styled.div`
	border: 1px solid #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction:column;
`

const Div = styled.div`
	display: flex;
	flex-direction:column;
`

const B = styled.b`
margin:10px;
`

const usuarioInit = {
	fotoPerfil_usuario: "",
}

export default function PlayerCard({ state, idUsuario }) {
	const [open, setOpen] = React.useState(state)
	const [usuario, setUsuario] = useState(usuarioInit)
	const [stats, setStats] = useState([]);
	const [carga, setCarga] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => setOpen(false)
	const peticion = helpHttp()
	const { text } = React.useContext(LanguajeContext)

	useEffect(() => {
		peticion
			.get(
				urlApi(
					`usuarios?select=primerNombre_usuario,primerApellido_usuario,fotoPerfil_usuario&linkTo=id_usuario&equalTo=${idUsuario}`
				)
			)
			.then((result) => {
				if (result.status == 200) {
					setUsuario(result.result[0])
					setCarga(true)
				}
			})
		peticion.get(urlApi(`statistics?id_usuario=${idUsuario}&tipo_estadistica=gol,penal,lateral&verificado=0&orderBy=tipo_Estadistica&orderMode=asc`)).then(e => {
			console.log(e)
			if (e.status == 200) {
				setStats(e.result)
			}
		})
	}, [])

	return (
		<div>
			<Button variant="contained" onClick={handleOpen}>
				<VisibilityIcon />
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Container>
					<Picture>
						<IconFoto src={usuario.fotoPerfil_usuario} />
					</Picture>
					<Div>
						<b>{usuario.primerNombre_usuario}</b>
						<b>{usuario.primerApellido_usuario}</b>
					</Div>
					<Div>
						{stats.map(e => (
							<>
								<B>{e.tipo_estadistica}: { e.conteo}</B>
							</>
						))}
					</Div>
					<Div></Div>
				</Container>
			</Modal>
		</div>
	)
}
