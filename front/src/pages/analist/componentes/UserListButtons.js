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

const peticion = helpHttp()

const Div = styled.div`
	display: flex;
	flex-direction: column;
	padding: 50px;
	margin: 20px;
	border-radius: 15px;
	box-shadow: 1px 1px 10px #0003;
`

const Container = styled.div`
	display: flex;
	@media screen and (max-width: 840px) {
		& {
			flex-direction: column;
		}
	}
`

const UserListButtons = ({ jugando, setJugando, locales, visitantes, name, onClick }) => {
	const [user, setUser] = useState({})
	const [titularesLocales, setTitularesLocales] = useState([])
	const [titularesVisitantes, setTitularesVisitantes] = useState([])
	const [titulares, setTitulares] = useState([])
	const [localesAux, setLocalesAux] = useState([])
	const [visitantesAux, setVisitantesAux] = useState([])

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
			<h4 style={{margin:"30px"}}>Indique los jugadores que están jugando</h4>
			<Container>
				<Div>
					<GridContained>
						<h4>Equipo local:</h4>
						{localesAux.map((e) => (
							<Button
								onClick={() => {
									setLocalesAux(localesAux.filter((el) => el.id_usuario != e.id_usuario))
									setTitularesLocales([...titularesLocales, e])
									setUser(e)
								}}
								key={e.ci_usuario}
							>
								{e.primerNombre_usuario}
							</Button>
						))}
					</GridContained>
				</Div>
				<Div>
					<GridContained>
						<h3>Titulares locales</h3>
						{titularesLocales.map((e) => (
							<Button
								onClick={() => {
									setTitularesLocales(
										titularesLocales.filter((el) => el.id_usuario != e.id_usuario)
									)
									setLocalesAux([...localesAux, e])
								}}
							>
								{e.primerNombre_usuario}
							</Button>
						))}
					</GridContained>
					<GridContained>
						<h3>Titulares visitantes</h3>
						{titularesVisitantes.map((e) => (
							<Button
								onClick={() => {
									setTitularesVisitantes(
										titularesVisitantes.filter((el) => el.id_usuario != e.id_usuario)
									)
									setVisitantesAux([...visitantesAux, e])
								}}
							>
								{e.primerNombre_usuario}
							</Button>
						))}
					</GridContained>
				</Div>
				<Div>
					<GridContained>
						<h4>Equipo visitante: {}</h4>
						{visitantesAux.map((e) => (
							<Button
								onClick={() => {
									setVisitantesAux(visitantesAux.filter((el) => el.id_usuario != e.id_usuario))
									setTitularesVisitantes([...titularesVisitantes, e])
									setUser(e)
								}}
								key={e.ci_usuario}
							>
								{e.primerNombre_usuario}
							</Button>
						))}
					</GridContained>
				</Div>
			</Container>
		</>
	)
}

export default UserListButtons
