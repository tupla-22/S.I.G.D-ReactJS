import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { BoxFlex } from "../../../componentes/BoxFlex"
import CardA from "../../../componentes/Card"
import Main from "../../../componentes/styledComponents/Main"
import React, { useState } from "react"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import imgSport from "../../../media/herramientas-deportivas_53876-138077.jpg"
const SportSelector = ({ routeAdd }) => {
	const [sports, setSports] = useState([])
	const [cantidadPorEquipos, setCantidadPorEquipos] = useState([])
	// const [cantidadDeJugadores, setCantidadDeJugadores] = useState([]);
	const peticion = helpHttp()

	useEffect(() => {
		peticion.get(urlApi(`deportes?`)).then((e) => {
			if ((e.status = 200)) {
				setSports(e.result)
			}
		})

		// peticion.get(urlApi(`cantidadEquiposDeportes?select=*`)).then((e) => {
		// 	if ((e.status = 200)) {
		// 		setCantidadPorEquipos(e.result)
		// 	}
		// })
	}, [])
	return (
		<>
			<Main>
				<BoxFlex>
					{sports.map((e,i) => (
						<CardA
							to={`../${e.id_deporte}/${routeAdd || ""}`}
							url={e.foto_deporte || imgSport}
							name={e.id_deporte}
							// data={"Cantida de equipos: " +cantidadPorEquipos[i].cantidad_equipo}
						></CardA>
					))}
				</BoxFlex>
				<Outlet />
			</Main>
		</>
	)
}

export default SportSelector
