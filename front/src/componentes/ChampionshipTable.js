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

const ChampionshipTable = ({ primero, segundos, terceros, cuartos }) => {

	return (
		<>
			<DivElp>
				<Container>
					<SubSeccion>
						<Div>
							<ImgTeam src={primero[0].escudo_equipo} />
						</Div>
					</SubSeccion>
					<SubSeccion>
						
					<Div>
							<ImgTeam src={primero[0].escudo_equipo} />
						</Div>
						{segundos.map((e) => (
							<Div>
								<ImgTeam src={e.escudo_equipo} />
							</Div>
						))}

					</SubSeccion>
					<SubSeccion>
						<Div>
							<ImgTeam src={primero[0].escudo_equipo} />
						</Div>
						{segundos.map((e) => (
							<Div>
								<ImgTeam src={e.escudo_equipo} />
							</Div>
						))}
						{terceros.map((e) => (
							<Div>
								<ImgTeam src={e.escudo_equipo} />
							</Div>
						))}
					</SubSeccion>
					<SubSeccion>
						<Div>
							<ImgTeam src={primero[0].escudo_equipo} />
						</Div>
						{segundos.map((e) => (
							<Div>
								<ImgTeam src={e.escudo_equipo} />
							</Div>
						))}

						{terceros.map((e) => (
							<Div>
								<ImgTeam src={e.escudo_equipo} />
							</Div>
						))}
						{cuartos.map((e) => (
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
