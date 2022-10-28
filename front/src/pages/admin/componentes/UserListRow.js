import { TD } from "../../../componentes/styledComponents/TD"
import SettingsIcon from "@mui/icons-material/Settings"
import { dateTradeEs, urlApi } from "../../../functions/globals"
import { useContext } from "react"
import LanguajeContext from "../../../contexts/LanguajeContext"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import { Button } from "@mui/material"
import PlayerCard from "../../../componentes/PlayerCard"
import React, { useState } from 'react';
import {useEffect } from 'react';
import { helpHttp } from "../../../helpers/helpHttp"

const peticion = helpHttp()

const UserListRow = ({ user, data, userType }) => {
  const [state, setState] = useState(false);
  const [usuario, setUsuario] = useState({});

	const { text } = useContext(LanguajeContext)

  useEffect(() => {
    peticion.get(
			urlApi(
				`usuarios?select=primerNombre_usuario,primerApellido_usuario,fotoPerfil_usuario&linkTo=id_usuario&equalTo=${data.ci_usuario}`
			)
		).then(result => {
			console.log(result,"usuario")
			if (result.status == 200) {
				setUsuario(result.reusult)
			}
		})
  }, []);

  const handleVisualizador = () => {
     setState(true)
  }

	return (
    <>
			<tr>
				{user.id_rol_usuario == 4 && (
					<td>
						<PlayerCard usuario={usuario} state={state} variant="contained">
							
						</PlayerCard>
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
