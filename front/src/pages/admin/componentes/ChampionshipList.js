import { DivOver } from "../../../componentes/DivOver"
import { TH } from "../../../componentes/styledComponents/TH"
import React, { useState, useEffect, useContext } from "react"
import { Table } from "../../../componentes/styledComponents/Table"
import ChampionshipListRow from "./ChampionshipListRow"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import LanguajeContext from "../../../contexts/LanguajeContext"

const ChampionshipList = () => {
	const [data, setData] = useState([])

	const peticion = helpHttp()

	const { text } = useContext(LanguajeContext)

	useEffect(() => {
		peticion.get(urlApi("campeonatos?select=*")).then((e) => {
			console.log(e)
			if (e.status == 200) setData(e.result)
		})
	}, [])

	return (
		<>
			<h3>{text.campeonatos}</h3>
			<DivOver>
				<Table>
					<HeadChampionshipTable></HeadChampionshipTable>
					<tbody>
						{data.map((e, i) => (
							<ChampionshipListRow key={"champ" + i} data={e} />
						))}
					</tbody>
				</Table>
			</DivOver>
		</>
	)
}

export default ChampionshipList

export const HeadChampionshipTable = () => {
	const { text } = useContext(LanguajeContext)
	return (
		<>
			<thead>
				<tr>
					<TH>{text.nombre}</TH>
					<TH>{text.fechaDeInicio}</TH>
					<TH>{text.fechaDeCierre}</TH>
					<TH>{text.deporte}</TH>
					<TH>ID</TH>
				</tr>
			</thead>
		</>
	)
}
