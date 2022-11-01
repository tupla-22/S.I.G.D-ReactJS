import { EscudoList } from "../../../componentes/styledComponents/EscudoList"
import { TD } from "../../../componentes/styledComponents/TD"
import { dateTradeEs, getUser } from "../../../functions/globals"
import React, { useState, useEffect } from "react"
import { BoxColCen, TR } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import { Button } from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import { helpHttp } from "../../../helpers/helpHttp"
import ModalChampionship from "./ModalChampioship"

const MatchListRow = ({ data }) => {
	const [admin, setAdmin] = useState(false)

	const peticion = helpHttp()
	const user = getUser()

	useEffect(() => {
		if (user.id_rol_usuario == 1 || user.id_rol_usuario == 2) {
			setAdmin(true)
		}
	}, [])

	const handleSeeTorneo = () => {}

	return (
		<>
			<TR>
				<TD>{dateTradeEs(data.dia_partido)}</TD>
				<TD>{data.hora_partido}</TD>
				<TD>
					<BoxColCen>
						{data.nombre_equipoLocal}
						<br />
						<EscudoList src={data.escudo_equipoLocal}></EscudoList>
					</BoxColCen>
				</TD>
				<TD>VS</TD>
				<TD>
					<BoxColCen>
						{data.nombre_equipoVisitante}
						<br />
						<EscudoList src={data.escudo_equipoVisitante} />
					</BoxColCen>
				</TD>
				{data.tipo_partido === "campeonato" ? (
					<TD>
						<BoxColCen>
							<ModalChampionship>
								<BoxColCen>
									<VisibilityIcon />
									{data.tipo_partido}
								</BoxColCen>
							</ModalChampionship>
						</BoxColCen>
					</TD>
				) : (
					<TD>
						<BoxColCen>{data.tipo_partido}</BoxColCen>
					</TD>
				)}
				{admin && (
					<TD>
						<BoxColCen>ID: {data.id_partido}</BoxColCen>
					</TD>
				)}
			</TR>
		</>
	)
}

export default MatchListRow
