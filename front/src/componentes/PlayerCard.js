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
	grid-template-columns: repeat(2, minmax(100px, 1fr));
	grid-template-rows: repeat(2, 200px);
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

const Div = styled.div`
	background-color: black;
	border: 1px solid #fff;
`


export default function PlayerCard({ state, idUsuario,usuario }) {
	const [open, setOpen] = React.useState(state)
	const handleOpen = () => {
		setOpen(true)
		
	}
	console.log(usuario)
	const handleClose = () => setOpen(false)

	const { text } = React.useContext(LanguajeContext)


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
						{/* <IconFoto src={usuario.fotoPerfil_usuario} />   */}
					</Div>
					<Div></Div>
					<Div></Div>
					<Div></Div>
				</Container>
			</Modal>
		</div>
	)
}
