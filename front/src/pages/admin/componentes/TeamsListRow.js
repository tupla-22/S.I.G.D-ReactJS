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
import ChampsNoSquadInModal from "./ChampsNoSquadInModal"
import LeagueListRowBtnSettings from "./LeagueListRowBtnSettings"
import { IconFoto } from "../../../componentes/styledComponents/IconFoto"
import { EscudoList } from "../../../componentes/styledComponents/EscudoList"
import ModalConfirm from "./ModalConfirm"
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ModalConfirmNoBtn from "./ModalConfirmNoBtn"
import BtnSettings from "./BtnSettings"

const TeamsListRow = ({ setEquipos,equipo,equipos}) => {
	const [adminTeam, setAdminTeam] = useState(false)
	const [contenido, setContenido] = useState([])
	const [ok, setOk] = useState(false)
	const peticion = helpHttp()
	const user = getUser()
	const [champs, setChamps] = useState([])
	const [deleteConfirm, setDeleteConfirm] = useState(0);

	const handleAddToChamp = (champ) => {
		console.log(champ, equipo)

		
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
		if (deleteConfirm==1) {
			peticion.del(urlApi(`equipos?id=${equipo.id_equipo}&nameID=id_equipo`)).then(e => {

				console.log(e,"Eliminacion de equipo")
				if (e.status==200) {
					setEquipos(equipos.filter(e=>e.id_equipo!=equipo.id_equipo))
				}
			})
		}
	}, [deleteConfirm]);

	useEffect(() => {
		if (champs.length !== 0) {
			setContenido([
				<ChampsNoSquadInModal teamId={equipo.id_equipo}/>,
				<SquadOfTeamModal teamId={equipo.id_equipo} />,
				<ModalConfirmNoBtn setConfirm={setDeleteConfirm}><Button> <BoxAlCen><DeleteForeverTwoToneIcon color="error"/>Eliminar</BoxAlCen> </Button></ModalConfirmNoBtn>
			])
		}
	}, [champs])

	return (
		<>
			{ok && <AlertSuccees />}
			<tr>
				<TD>
					<BoxAlJusCen><EscudoList src={equipo.escudo_equipo}/> </BoxAlJusCen>
				</TD>

				<TD>
					<BoxAlJusCen>{equipo.nombre_equipo}</BoxAlJusCen>
				</TD>
				<TD>
					<BoxAlJusCen>{equipo.id_deporte_equipo}</BoxAlJusCen>
				</TD>
				
				<TD>
					<BoxAlJusCen>{equipo.id_equipo}</BoxAlJusCen>
				</TD>
				{adminTeam && (
					<TDF>
						<BtnSettings contenido={contenido} />
					</TDF>
				)}
			</tr>
		</>
	)
}

export default TeamsListRow
