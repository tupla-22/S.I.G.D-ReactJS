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
import { dateTradeEs, urlApi } from "../functions/globals"
import { H3 } from "./styledComponents/H3"
import { unstable_requirePropFactory } from "@mui/utils"
import { B, P } from "./styledComponents/ComponentesDeEstilos"
import { TH } from "./styledComponents/TH"
import { TD } from "./styledComponents/TD"
import { Table } from "./styledComponents/Table"

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
	overflow: auto;
	max-width: 600px;
	max-height: 90vh;
	@media screen and (max-width: 1050px) {
		& {
			width: 90%;
		}
	}
`

const Picture = styled.div`
	border: 1px solid #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	
`

const Div = styled.div`
	display: flex;
	flex-direction: column;
`

const usuarioInit = {
	fotoPerfil_usuario: "",
}

export default function PlayerCard({ state, idUsuario }) {
	const [open, setOpen] = React.useState(state)
	const [usuario, setUsuario] = useState(usuarioInit)
	const [stats, setStats] = useState([])
	const [telefonos, setTelefonos] = useState([])
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => setOpen(false)
	const peticion = helpHttp()
	const { text } = React.useContext(LanguajeContext)

	useEffect(() => {
		peticion
			.get(urlApi(`telefonos?select=id_telefono&linkTo=id_usuario_telefono&equalTo=${idUsuario}`))
			.then((result) => {
				if (result.status == 200) {
					setTelefonos(result.result)
				}
			})
		peticion.get(urlApi(`usuarios?select=*&linkTo=id_usuario&equalTo=${idUsuario}`)).then((result) => {
			if (result.status == 200) {
				setUsuario(result.result[0])
			}
		})
		peticion
			.get(
				urlApi(
					`statistics?id_usuario=${idUsuario}&tipo_estadistica=gol,penal,lateral&verificado=0&orderBy=tipo_Estadistica&orderMode=asc`
				)
			)
			.then((e) => {
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
					<Div>
						<Picture>
							<IconFoto src={usuario.fotoPerfil_usuario} />
						</Picture>
						<Div>
							<B>{text.jugador}</B>
							<P>
								{usuario.primerNombre_usuario} {usuario.primerApellido_usuario}
							</P>
							<P>
								{text.fechaDeNacimiento}: {dateTradeEs(usuario.fechaNac_usuario)}
							</P>
						</Div>
					</Div>
					<Div>
						<B>{text.estadisticas}</B>
						<Table>
							<thead>
								<tr>
									<TH>{text.tipoDeEstadistica}</TH>
									<TH>{ text.cantidad}</TH>
								</tr>
							</thead>
							<tbody>
								{stats.map((e) => (
									<>
										<tr>
											<TD>{e.tipo_estadistica}</TD>
											<TD>{e.conteo}</TD>
										</tr>
									</>
								))}
							</tbody>
						</Table>
					</Div>
					<Div>
						<>
							<B>{text.contacto}</B>

							{telefonos.map((telefono) => (
								<P>{telefono.id_telefono}</P>
							))}
							<P>{usuario.email_usuario}</P>
						</>
					</Div>
				</Container>
			</Modal>
		</div>
	)
}
