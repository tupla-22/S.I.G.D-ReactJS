import { Button } from "@mui/material"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { BoxFlex } from "../../../componentes/BoxFlex"
import Form from "../../../componentes/Form"
import { PAlert } from "../../../componentes/PAlert"
import { GridContained } from "../../../componentes/styledComponents/GridContained"
import { H3 } from "../../../componentes/styledComponents/H3"
import { urlApi } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import SyncAltIcon from "@mui/icons-material/SyncAlt"
import RepeatOnTwoToneIcon from "@mui/icons-material/RepeatOnTwoTone"
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone"
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import { B } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import { useContext } from "react"
import LanguajeContext from "../../../contexts/LanguajeContext"
import { useParams } from "react-router-dom"

const peticion = helpHttp()

const Div = styled.div`
	display: flex;
	flex-direction: column;
	padding: 50px;
	margin: 20px;
	border-radius: 15px;
	box-shadow: 1px 1px 10px #0003;
	background-color: #fff;
	align-items: center;
	justify-content: center;
`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 840px) {
		& {
			flex-direction: column;
		}
	}
`

const DAux = styled.div`

@media screen and (max-width: 840px) {
		& {
			display:none;
		}
	}


`


const DAuxDos = styled.div`
display:none;
@media screen and (max-width: 840px) {
		& {
			display:inline-block;
		}
	}


`


const WhoArePlaying = ({ jugando, setJugando, locales, visitantes, name, onClick }) => {
	const [user, setUser] = useState({})
	const [titularesLocales, setTitularesLocales] = useState([])
	const [titularesVisitantes, setTitularesVisitantes] = useState([])
	const [titulares, setTitulares] = useState([])
	const [localesAux, setLocalesAux] = useState([])
	const [visitantesAux, setVisitantesAux] = useState([])

	const { text } = useContext(LanguajeContext)
	const peticion = helpHttp()

	const {matchId} = useParams()




	useEffect(() => {
		setLocalesAux(locales)
		setVisitantesAux(visitantes)
	}, [locales])

	useEffect(() => {
		setLocalesAux(locales)
		setVisitantesAux(visitantes)
	}, [visitantes])

	useEffect(
		(e) => {
			setTitulares([...titularesLocales, ...titularesVisitantes])
			setJugando([...titularesLocales, ...titularesVisitantes])
		},
		[titularesLocales]
	)

	useEffect(() => {
		setTitulares([...titularesLocales, ...titularesVisitantes])
		setJugando([...titularesLocales, ...titularesVisitantes])
	}, [titularesVisitantes])

	const handleTitulares = (e) => {}

	return (
		<>
			<h4 style={{ margin: "30px" }}>Indique los jugadores que están jugando en cada instante</h4>
			<Container>
				<Div>
					<DAux><ArrowCircleRightTwoToneIcon color="secondary" fontSize="large" /></DAux>
					<DAuxDos><ArrowCircleDownTwoToneIcon color="secondary" fontSize="large"/></DAuxDos>
					<B>{text.equipoLocal}</B>
					<GridContained>
						{localesAux.map((e) => (
							<Button
								onClick={() => {
									setLocalesAux(localesAux.filter((el) => el.id_usuario != e.id_usuario))
									setTitularesLocales([...titularesLocales, e])
									setUser(e)
								}}
								key={e.ci_usuario}
							>
								{e.primerNombre_usuario} {e.primerApellido_usuario }
							</Button>
						))}
					</GridContained>
				</Div>
				<Div>
					<RepeatOnTwoToneIcon color="secondary" fontSize="large" />

					<GridContained>
						<B>{ text.localesEnElJuego}</B>
						{titularesLocales.map((e) => (
							<Button
								onClick={() => {
									setTitularesLocales(
										titularesLocales.filter((el) => el.id_usuario != e.id_usuario)
									)
									setLocalesAux([...localesAux, e])
								}}
							>
								{e.primerNombre_usuario} {e.primerApellido_usuario }
							</Button>
						))}
					</GridContained>
					<GridContained>
						<B>{ text.visitantesEnElJuego}</B>
						{titularesVisitantes.map((e) => (
							<Button
								onClick={() => {
									setTitularesVisitantes(
										titularesVisitantes.filter((el) => el.id_usuario != e.id_usuario)
									)
									setVisitantesAux([...visitantesAux, e])
								}}
							>
								{e.primerNombre_usuario} {e.primerApellido_usuario }
							</Button>
						))}
					</GridContained>
				</Div>
				<Div>
					<DAux><ArrowCircleLeftTwoToneIcon color="secondary" fontSize="large" /></DAux>
					<DAuxDos><ArrowCircleUpTwoToneIcon color="secondary" fontSize="large"/></DAuxDos>
					<GridContained>
					    <B>{text.equipoVisitante} </B>
						{visitantesAux.map((e) => (
							<Button
								onClick={() => {
									setVisitantesAux(visitantesAux.filter((el) => el.id_usuario != e.id_usuario))
									setTitularesVisitantes([...titularesVisitantes, e])
									setUser(e)
								}}
								key={e.ci_usuario}
							>
								{e.primerNombre_usuario} {e.primerApellido_usuario }
							</Button>
						))}
					</GridContained>
				</Div>
			</Container>
		</>
	)
}

export default WhoArePlaying
