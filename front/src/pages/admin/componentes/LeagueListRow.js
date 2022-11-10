import { BoxAlCen, BoxAlJusCen, TDF } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import { TD } from "../../../componentes/styledComponents/TD"
import LeagueListRowBtnSettings from "./LeagueListRowBtnSettings"
import TouchAppTwoToneIcon from "@mui/icons-material/TouchAppTwoTone"
import { Button } from "@mui/material"
import InsertPhotoTwoToneIcon from "@mui/icons-material/InsertPhotoTwoTone"
import React, { useState, useEffect } from "react"
import BtnSettings from "../../../componentes/BtnSettings"
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone"
import ModalConfirm from "./ModalConfirm"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import ModalConfirmNoBtn from "./ModalConfirmNoBtn"
import BtnUpadateRow from "./BtnUpdateRow"

const LeagueListRow = ({ setOk, setError, leagues, setleagues, league, user, statsOftheleague }) => {
	const [delConfirm, setDelConfirm] = useState(0)

	const peticion = helpHttp()

	const contentSettings = [
		<ModalConfirmNoBtn setConfirm={setDelConfirm}>
			<DeleteForeverTwoToneIcon color="error" />
		</ModalConfirmNoBtn>,
	]

	useEffect(() => {
		if (delConfirm == 1) {
			peticion.del(urlApi(`ligas?id=${league.id_liga}&nameID=id_liga`)).then((e) => {
				console.log(e)
				if (e.status == 200) {
					setleagues(leagues.filter((e) => e.id_liga != league.id_liga))
					setOk(true)
				} else {
					setError(true)
				}
				setTimeout(() => {
					setOk(false)
					setError(false)
				}, 5000)
			})
		}
	}, [delConfirm])

	return (
		<>
			<tr>
				{(user.id_rol_usuario == 1 || user.id_rol_usuario == 2) && (
					<BtnSettings content={contentSettings}></BtnSettings>
				)}
				<TD>{league.nombre_liga}</TD>
				<TD>{league.id_deporte_liga}</TD>
				<TDF>
					<leagueListRowPopStatsShower league={league.id_liga} statsOftheleague={statsOftheleague} />
				</TDF>
			</tr>
		</>
	)
}

{
	/* <img alt="Imagen del liga" style={{height:"35px"}} src={`${league.foto_liga}`}></img> */
}

export default LeagueListRow
