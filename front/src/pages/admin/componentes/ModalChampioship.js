import * as React from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Typography from "@mui/material/Typography"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import LanguajeContext from "../../../contexts/LanguajeContext"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import { useState, useEffect } from "react"
import { H3B } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import ChampionshipTable from "../../../componentes/ChampionshipTable"
import { Button, IconButton } from "@mui/material"
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	borderRadius: "15px",
	transform: "translate(-50%, -50%)",
	width: "98%",
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 1,
}

export default function ModalChampionship({ children, idChampionship }) {
	const [open, setOpen] = React.useState("")
	const [campeonato, setCampeonato] = useState({})
	const [cuartos, setCuartos] = useState([])
	const [terceros, setTerceros] = useState([])
	const [segundos, setSegundos] = useState([])
	const [primero, setPrimero] = useState([])
	const [partidos, setPartidos] = useState([]);
	const [partidoUno, setPartidoUno] = useState([]);


	const handleOpen = () => setOpen(true)
	const handleClose = (e) => {
		setOpen(false)
	}

	const { text } = React.useContext(LanguajeContext)
	const peticion = helpHttp()

	useEffect(() => {
		peticion
			.get(urlApi(`equiposDeCampeonatosFinalizados?select=*&linkTo=id_campeonato&equalTo=${idChampionship}`))
			.then((e) => {
				console.log(e,"EQUIPOS")
				if (e.status == 200) {
					console.log(e.result.filter(e => {
						return e.punto_compite != 0
					}))

					setCuartos(
						e.result.filter((e) => e.punto_compite == 0
						
						))
					setTerceros(e.result.filter((e) => e.punto_compite == 4))
					setSegundos(e.result.filter((e) => e.punto_compite == 7))
					setPrimero(e.result.filter((e) => e.punto_compite == 9))
				}
			})
		peticion
			.get(
				urlApi(
					`relations?select=*&rel=corresponden,partidos&type=corresponde,partido&equalTo=2&linkTo=id_campeonato_corresponde&equalTo${idChampionship}`
				)
			)
			.then((e) => {
				console.log(e,"PARTIDOS")
				if (e.status == 200) {
					setPartidos(e.result)
				}
			})
	}, [])


	return (
		<div>
			<Button onClick={handleOpen}>{children}</Button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<IconButton onClick={handleClose} placement="top-end">
							<HighlightOffTwoToneIcon color="error" />
						</IconButton>
						<Typography id="transition-modal-title" variant="h6" component="h2">
							<H3B>Información del campeonato</H3B>
						</Typography>
						<ChampionshipTable primero={primero} segundos={segundos } terceros={terceros} cuartos={cuartos} />
					</Box>
				</Fade>
			</Modal>
		</div>
	)
}
