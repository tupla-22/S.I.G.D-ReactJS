import { TD } from "../../../componentes/styledComponents/TD"
import { dateTradeEs, getUser, urlApi } from "../../../functions/globals"
import React, { useState, useEffect } from "react"
import { BoxCen, BoxColCen, TDF } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import { IconButton } from "@mui/material"
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone"
import { helpHttp } from "../../../helpers/helpHttp"
import BtnSettings from "../../../componentes/BtnSettings"
import ModalChampionship from "./ModalChampioship"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import BtnDel from "./BtnDel"
import BtnUpadateRow from "./BtnUpdateRow"

const ChampionshipListRow = ({ thead, modificable, teamId, champ, setOk, setchamps, champs, open }) => {
	const [modify, setModify] = useState(false)
	const [tableRowData, setTableRowData] = useState([])
	const [keys, setKeys] = useState([])
	const [form, setForm] = useState({})
	const [error, setError] = useState(false)
	const [admin, setAdmin] = useState(false);
	const [visor, setVisor] = useState(false);

	const user = getUser()
	const peticion = helpHttp()
	useEffect(() => {
		if ((user.id_rol_usuario == 1 || user.id_rol_usuario == 2 || user.id_rol_usuario == 6) && modificable == true) {
			setModify(true)
			
		}
		if (user.id_rol_usuario == 1 || user.id_rol_usuario == 2 || user.id_rol_usuario == 6){
			setAdmin(true)
		} else {
			setVisor(true)
		}
		setTableRowData([
			champ.nombre_campeonato,
			champ.fechaInicio_campeonato,
			champ.fechaFin_campeonato,
			champ.deporte_campeonato,
		])

		setForm({
			...form,
			nombre_campeonato: champ.nombre_campeonato,
			fechaInicio_campeonato: champ.fechaInicio_campeonato,
			fechaFin_campeonato: champ.fechaFin_campeonato,
			deporte_campeonato: champ.deporte_campeonato,
		})
		setKeys(Object.keys(champ))
	}, [])

	const handleAddToChamp = () => {
		const form = {
			body: new URLSearchParams({
				id_equipo_compite: teamId,
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
				setchamps(champs.filter((el) => el.id_campeonato !== champ.id_campeonato))
			}
		})
	}

	return (
		<tr>
			<TD>{champ.nombre_campeonato}</TD>
			<TD>{dateTradeEs(champ.fechaInicio_campeonato)}</TD>
			<TD>{dateTradeEs(champ.fechaFin_campeonato)}</TD>
			<TD>{champ.deporte_campeonato}</TD>
			{user.id_rol_usuario == 1 ||
				user.id_rol_usuario == 2 ||
				(user.id_rol_usuario == 6 && <TD>{champ.id_campeonato}</TD>)}
			{visor && <TDF>
					<BtnSettings
						content={[
							<BoxColCen>
								<ModalChampionship idChampionship={champ.id_campeonato}>
									<BoxCen>
										<RemoveRedEyeIcon /> Ver
									</BoxCen>
								</ModalChampionship>
							</BoxColCen>
						]}
					/>
				</TDF>}
			{modify && (
				<TDF>
					<IconButton
						onClick={() => {
							handleAddToChamp()
						}}
						color="secondary"
					>
						<AddCircleTwoToneIcon />
					</IconButton>
				</TDF>
			)}
			{admin && (
				<TDF>
					<BtnSettings
						content={[
							<BoxColCen>
								<ModalChampionship idChampionship={champ.id_campeonato}>
									<BoxCen>
										<RemoveRedEyeIcon /> Ver
									</BoxCen>
								</ModalChampionship>
							</BoxColCen>,
							<BtnDel
								table={"campeonatos"}
								array={champs}
								setArray={setchamps}
								id={champ.id_campeonato}
								fieldName={"id_campeonato"}
							/>,
							<BtnUpadateRow
								keys={Object.keys(form)}
								form={form}
								array={champs}
								tableRowData={tableRowData}
								thead={thead}
								table={"campeonatos"}
								setArray={setchamps}
								id={champ.id_campeonato}
								fieldName={"id_campeonato"}
								setOk={setOk}
								setError={setError}
							/>,
						]}
					/>
				</TDF>
			)}
		</tr>
	)
}

export default ChampionshipListRow
