import styled from "styled-components"
import React, { useState, useEffect } from "react"

const Container = styled.section`
	width: 100%;
	height: 425px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	@media screen and (max-width: 1000px) {
		& {
			width: 100%;
			height: 300px;
		}
	}

	@media screen and (max-width: 600px) {
		& {
			height: 220px;
		}
	}
	min-width: 340px;
`
const SubSeccion = styled.div`
	width: 100%;
	height: 25%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`

const DivElp = styled.div`
	height: 100%;
	width: 100%;
	overflow: auto;
`

const Div = styled.div`
	height: 70px;
	width: 70px;
	@media screen and (max-width: 1000px) {
		& {
			height: 50px;
			width: 50px;
		}
	}

	@media screen and (max-width: 600px) {
		& {
			height: 30px;
			width: 30px;
		}
	}
`
const ImgTeam = styled.img`
	height: 70px;
	width: 70px;
	@media screen and (max-width: 1000px) {
		& {
			height: 50px;
			width: 50px;
		}
	}

	@media screen and (max-width: 600px) {
		& {
			height: 30px;
			width: 30px;
		}
	}
`

const ChampionshipTable = ({ primero = [], segundos = [], terceros = [], cuartos = [] }) => {
	const [primeroS, setPrimeroS] = useState([])
	const [segundoS, setSegundoS] = useState([])
	const [terceroS, setTerceroS] = useState([])
	const [cuartoS, setCuartoS] = useState([])

	useEffect(() => {
		if(Array.isArray(primero))setPrimeroS(primeroS)
		if(Array.isArray(segundos))setSegundoS(segundoS)
		if(Array.isArray(terceros))setTerceroS(terceroS)
		if (Array.isArray(cuartos)) setCuartoS(cuartoS)
		
	}, [primero,segundos,terceros,cuartos]);

	return (
		<>
			<DivElp>
				<Container>
					<SubSeccion>
						<Div>
							{primeroS.map((e) => (
								<ImgTeam src={e.escudo_equipo} />
							))}
						</Div>
					</SubSeccion>
					<SubSeccion>
						<Div>
							{primeroS.map((e) => (
								<ImgTeam src={e.escudo_equipo} />
							))}
						</Div>
						{segundoS.map((e) => (
							<Div>
								<ImgTeam src={e.escudo_equipo} />
							</Div>
						))}
					</SubSeccion>
					<SubSeccion>
						<Div>
							{primeroS.map((e) => (
								<ImgTeam src={e.escudo_equipo} />
							))}
						</Div>
						{segundoS.map((e) => (
							<Div>
								<ImgTeam src={e.escudo_equipo} />
							</Div>
						))}
						{terceroS.map((e) => (
							<Div>
								<ImgTeam src={e.escudo_equipo} />
							</Div>
						))}
					</SubSeccion>
					<SubSeccion>
						<Div>
							{primeroS.map((e) => (
								<ImgTeam src={e.escudo_equipo} />
							))}
						</Div>
						{segundoS.map((e) => (
							<Div>
								<ImgTeam src={e.escudo_equipo} />
							</Div>
						))}

						{terceroS.map((e) => (
							<Div>
								<ImgTeam src={e.escudo_equipo} />
							</Div>
						))}
						{cuartoS.map((e) => (
							<Div>
								<ImgTeam src={e.escudo_equipo} />
							</Div>
						))}
					</SubSeccion>
				</Container>
			</DivElp>
		</>
	)
}

export default ChampionshipTable
