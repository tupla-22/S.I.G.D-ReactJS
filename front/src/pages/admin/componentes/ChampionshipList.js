import { DivOver } from "../../../componentes/DivOver"
import { TH } from "../../../componentes/styledComponents/TH"
import React, { useState, useEffect, useContext } from "react"
import { Table } from "../../../componentes/styledComponents/Table"
import ChampionshipListRow from "./ChampionshipListRow"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import LanguajeContext from "../../../contexts/LanguajeContext"
import AlertSuccees from "../../../componentes/AlertSuccees"
import { H3B } from "../../../componentes/styledComponents/ComponentesDeEstilos"

const ChampionshipList = ({modificable, teamId}) => {
	const [data, setData] = useState([])
	const [ok, setOk] = useState(false);

	const peticion = helpHttp()

	const { text } = useContext(LanguajeContext)

	useEffect(() => {
		peticion.get(urlApi(teamId!=undefined ? `getCampeonatoDondeNoSeParticipa?id_equipo=${teamId}` :  "campeonatos?select=*")).then((e) => {
			console.log(e)
			if (e.status == 200) setData(e.result)
		})
	}, [])

	return (
		<>
			{ok && <AlertSuccees/>}
			<H3B>{text.campeonatos}</H3B>
			<DivOver>
				<Table>
					<HeadChampionshipTable></HeadChampionshipTable>
					<tbody>
						{data.map((e, i) => (
							<ChampionshipListRow modificable={modificable} setOk={setOk} teamId={teamId} key={"champ" + i} setchamps={setData} champs={data} champ={e} />
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
