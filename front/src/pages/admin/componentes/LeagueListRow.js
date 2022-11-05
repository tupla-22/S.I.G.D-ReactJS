import { TD } from "../../../componentes/styledComponents/TD"
import { getUser, urlApi } from "../../../functions/globals"
import React, { useState } from "react"
import { useEffect } from "react"
import { BoxAlJusCen, BoxCen, ImgTable, TDF } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import TeamListRowBtnSettings from "./TeamsListRowBtnSettings"
import { helpHttp } from "../../../helpers/helpHttp"
import AlertSuccees from "../../../componentes/AlertSuccees"
import ChampsNoSquadInModal from "./ChampsNoSquadInModal"

const LeagueListRow = ({ data }) => {
	const [adminTeam, setAdminTeam] = useState(false)
	const [contenido, setContenido] = useState([])
	const [ok, setOk] = useState(false)
	const peticion = helpHttp()
	const user = getUser()
	const [champs, setChamps] = useState([])

	const handleAddToChamp = (champ) => {
		console.log(champ, data)
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
				<ChampsNoSquadInModal teamId={data.id_equipo} />,
				<SquadOfTeamModal teamId={data.id_equipo} />,
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

export default LeagueListRow
