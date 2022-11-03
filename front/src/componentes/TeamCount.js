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
import { B, H3B, P } from "./styledComponents/ComponentesDeEstilos"
import { TH } from "./styledComponents/TH"
import { TD } from "./styledComponents/TD"
import { Table } from "./styledComponents/Table"

const Container = styled.section`
	width: 70%;
	box-shadow: 24;
	padding: 50px;
	border-radius: 5px;
	background-color: #fff;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-auto-rows: minmax(200px, auto);
	overflow: auto;
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

export default function PlayerCardOnly({ state, idUsuario }) {
	const [open, setOpen] = React.useState(state)
	const [usuario, setUsuario] = useState(usuarioInit)
	const [stats, setStats] = useState([])
	const [telefonos, setTelefonos] = useState([])
	const [features, setFeatures] = useState({})
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => setOpen(false)
	const peticion = helpHttp()
	const { text } = React.useContext(LanguajeContext)

	useEffect(() => {
		peticion
			.get(urlApi(`cantidadEquiposDeportes?select=id_deporte,cantidad_equipo`))
			.then((result) => {
				if (result.status == 200) {
					console.log(result.result);
					setTelefonos(result.result)
				}
			})

	}, [])

	return (
				<Container>
				
					<Div>
						<>
							<H3B>{"cantidad equipos por deporte"}</H3B>

							{telefonos.map((telefono) => (
								<P>{telefono.id_deporte}  {telefono.cantidad_equipo}</P>
							))}
							
						</>
					</Div>
				</Container>
	)
}
