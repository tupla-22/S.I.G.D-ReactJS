import { TD } from "../../../componentes/styledComponents/TD"
import SettingsIcon from "@mui/icons-material/Settings"
import { dateTradeEs, urlApi } from "../../../functions/globals"
import { useContext } from "react"
import LanguajeContext from "../../../contexts/LanguajeContext"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import { Button } from "@mui/material"
import PlayerCard from "../../../componentes/PlayerModal.js"
import React, { useState } from "react"
import { useEffect } from "react"
import { helpHttp } from "../../../helpers/helpHttp"

const peticion = helpHttp()

const UserListRow = ({ user, data, userType }) => {
	const [state, setState] = useState(false)
	const [peticionOj, setPeticionOj] = useState(false)
	const { text } = useContext(LanguajeContext)

	const handleVisualizador = () => {
		setState(true)
	}

	return (
		<>
			<tr>
				{user.id_rol_usuario == 4 && (
					<td>
						<PlayerCard idUsuario={data.id_usuario} state={state} variant="contained"></PlayerCard>
					</td>
				)}
				<TD>{data.primerNombre_usuario}</TD>
				<TD>{data.primerApellido_usuario}</TD>
				<TD>{data.ci_usuario}</TD>
				<TD>{data.email_usuario}</TD>
				<TD>{dateTradeEs(data.fechaNac_usuario)}</TD>
				<TD>{data.id_rol_usuario}</TD>
			</tr>
		</>
	)
}

export default UserListRow
