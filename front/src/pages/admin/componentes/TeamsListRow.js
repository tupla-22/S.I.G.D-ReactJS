import { TD } from "../../../componentes/styledComponents/TD"
import { getUser, urlApi } from "../../../functions/globals"
import React, { useState } from "react"
import { useEffect } from "react"
import { BoxAlCen, BoxAlJusCen, BoxCen, ImgTable, TDF } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import { Button, IconButton, Table } from "@mui/material"

import TeamListRowBtnSettings from "./TeamsListRowBtnSettings"
import { helpHttp } from "../../../helpers/helpHttp"
import ChampionshipListRow from "./ChampionshipListRow"
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone"
import { HeadChampionshipTable } from "./ChampionshipList"
import { DivOver } from "../../../componentes/DivOver"
import AlertSuccees from "../../../componentes/AlertSuccees"
import BasicModal from "../../../componentes/BasicModal"
import SquadOfTeamModal from "./SquadOfTeamModal"
import ChampsNoSquadInModal from "./ChampsNoSquadIn"

const TeamsListRow = ({ data }) => {
	const [adminTeam, setAdminTeam] = useState(false)
	const [contenido, setContenido] = useState([])
	const [ok, setOk] = useState(false)
	const peticion = helpHttp()
	const user = getUser()
	const [champs, setChamps] = useState([])

	const handleAddToChamp = (champ) => {
		console.log(champ, data)

		const form = {
			body: new URLSearchParams({
				id_equipo_compite: data.id_equipo,
				id_campeonato_compite: champ.id_campeonato,
			}),
		}
		peticion.post(urlApi(`compiten?`), form).then((res) => {
			console.log(res)
			if ((res.status = 200)) {
				setOk(true)
				setTimeout(() => {
					setOk(false)
				}, 5000)
				setChamps(champs.filter((el) => el.id_campeonato !== champ.id_campeonato))
			}
		})
	}

	useEffect(() => {
		if (user.id_rol_usuario == 6 || user.id_rol_usuario == 2 || user.id_rol_usuario == 1) {
			setAdminTeam(true)
		}
		peticion.get(urlApi("campeonatos?select=*")).then((e) => {
			if ((e.status = 200)) {
				setChamps(e.result)
			}
		})
	}, [])

	useEffect(() => {
		if (champs.length !== 0) {
			setContenido([
				<ChampsNoSquadInModal teamId={data.id_equipo}/>,
                <SquadOfTeamModal teamId={data.id_equipo } />
			])
		}
	}, [champs])

	return (
		<>
			{ok && <AlertSuccees />}
			<tr>
				<TD>
					<BoxAlJusCen>
						<ImgTable src={`${data.escudo_equipo}`}></ImgTable>
					</BoxAlJusCen>
				</TD>
				<TD>
					<BoxAlJusCen>{data.nombre_equipo}</BoxAlJusCen>
				</TD>

				<TD>
					<BoxAlJusCen>{data.id_deporte_equipo}</BoxAlJusCen>
				</TD>
				<TD>
					<BoxAlJusCen>{data.id_equipo}</BoxAlJusCen>
				</TD>
				{adminTeam && (
					<TDF>
						<TeamListRowBtnSettings contenido={contenido} />
					</TDF>
				)}
			</tr>
		</>
	)
}

export default TeamsListRow
