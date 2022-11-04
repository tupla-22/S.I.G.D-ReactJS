import React, { useState, useEffect, useContext } from "react"
import { DivOver } from "../../../componentes/DivOver"
import { Table } from "../../../componentes/styledComponents/Table"
import { TH } from "../../../componentes/styledComponents/TH"
import { getUser, urlApi, userVerifier } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import UserListRow from "./UserListRow"
import SettingsIcon from "@mui/icons-material/Settings"

import { unstable_detectScrollType } from "@mui/utils"
import LanguajeContext from "../../../contexts/LanguajeContext"
import { Button } from "@mui/material"
import { H3B } from "../../../componentes/styledComponents/ComponentesDeEstilos"

const UserList = ({ciUsuarioEliminado,teamId}) => {
	const [data, setData] = useState([])
	const [status, setStatus] = useState(false)
	const [userType, setUserType] = useState({})
	const peticion = helpHttp()

	const { text } = useContext(LanguajeContext)

	const user = getUser()
	useEffect(() => {
		peticion.get(urlApi(teamId=undefined ? `usuarios?select=*` : `squad?teamID=${teamId}`)).then((dat) => {
			if (dat.status == 200) {
		  
				
				setData(dat.result.filter(e=> e.ci_usuario != 0))
				setStatus(true)
			}
		})
		userVerifier(setUserType, userType)
	}, [])

	useEffect(() => {
		if (ciUsuarioEliminado) {
			setData(data.filter(el => el.ci_usuario != ciUsuarioEliminado))
		}
		console.log(ciUsuarioEliminado)
		console.log(data)
	}, [ciUsuarioEliminado]);

	return (
		<>
			<H3B>{text.usuarios}</H3B>
			<DivOver>
				<Table>
					<thead>
						{user.id_rol_usuario == 4 && <th></th>}
						<TH>{text.nombre}</TH>
						<TH>{text.apellido}</TH>
						<TH>{text.cedula}</TH>
						<TH>{text.correoElectronico}</TH>
						<TH>{text.fechaDeNacimiento}</TH>
						{user.id_rol_usuario == 1 || user.id_rol_usuario == 2 && <TH>{text.rol}</TH>}
					</thead>

					<tbody>
						{status && data.map((e) => <UserListRow user={user} key={e.ci_usuario} data={e} />)}
					</tbody>
				</Table>
			</DivOver>
		</>
	)
}

export default UserList
