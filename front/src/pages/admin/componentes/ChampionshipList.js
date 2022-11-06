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

const user = helpHttp()

const ChampionshipList = ({open, modificable, teamId}) => {
	const [data, setData] = useState([])
	const [ok, setOk] = useState(false);

	const peticion = helpHttp()

	const { text } = useContext(LanguajeContext)

	useEffect(() => {
		let urlChamps;
		if (open==true) {
			urlChamps=`getStatusCampeonato?open_campeonato=1`
		} else if (open ==false) {
			urlChamps=`getStatusCampeonato?open_campeonato=0`
		} else {
			urlChamps = teamId != undefined ? `getCampeonatoDondeNoSeParticipa?id_equipo=${teamId}` : "campeonatos?select=*";
		}

		
		peticion.get(urlApi(urlChamps)).then((e) => {
			console.log(e)
			if (e.status == 200) {
				console.log(e.result)
				setData(e.result)
			}
		})
	}, [])

	return (
		<>
			{ok && <AlertSuccees ok={ ok} setOk={setOk} />}
			<H3B>{text.campeonatos}</H3B>
			<DivOver>
				<Table>
					<HeadChampionshipTable></HeadChampionshipTable>
					<tbody>
						{data.map((e, i) => (
							<ChampionshipListRow thead={<HeadChampionshipTable/>} open={open} modificable={modificable} setOk={setOk} teamId={teamId} key={"champ" + i} setchamps={setData} champs={data} champ={e} />
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
					{user.id_rol_usuario == 1 || user.id_rol_usuario == 2 || user.id_rol_usuario == 6 && <TH>ID</TH>}
				</tr>
			</thead>
		</>
	)
}
