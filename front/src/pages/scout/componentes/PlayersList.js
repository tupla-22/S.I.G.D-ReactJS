import React, { useState, useEffect, useContext } from "react"
import { DivOver } from "../../../componentes/DivOver"
import { Table } from "../../../componentes/styledComponents/Table"
import { TH } from "../../../componentes/styledComponents/TH"
import { getUser, urlApi, userVerifier } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import UserListRow from "../../admin/componentes/UserListRow"
import SettingsIcon from "@mui/icons-material/Settings"

import LanguajeContext from "../../../contexts/LanguajeContext"
import { Button } from "@mui/material"
import { Seccion } from "../../../componentes/styledComponents/Seccion"

const PlayerList = () => {
	const [data, setData] = useState([])
	const [status, setStatus] = useState(false)
	const [userType, setUserType] = useState({})
	const peticion = helpHttp()

	const { text } = useContext(LanguajeContext)

	const user = getUser()

	const urlJugadores =
		"relations?select=id_usuario,ci_usuario,carneSalud_usuario,fechaNac_usuario,email_usuario,primerApellido_usuario,primerNombre_usuario,id_rol_usuario&rel=tienen,usuarios&type=tiene,usuario"

	useEffect(() => {
		peticion.get(urlApi(urlJugadores)).then((dat) => {
			console.log(dat)
			if (dat.status == 200) {
				setData(dat.result.filter((e) => e.ci_usuario != 0))
				setStatus(true)
			}
		})
		userVerifier(setUserType, userType)
	}, [])

	return (
		<>
				<h3>{text.jugadores}</h3>
				<DivOver>
					<Table>
						<thead>
							{user.id_rol_usuario == 4 && <th></th>}
							<TH>{text.nombre}</TH>
							<TH>{text.apellido}</TH>
							<TH>{text.cedula}</TH>
							<TH>{text.correoElectronico}</TH>
							<TH>{text.fechaDeNacimiento}</TH>
							<TH>{text.rol}</TH>
						</thead>

						<tbody>
							{status && data.map((e) => <UserListRow user={user} key={e.ci_usuario} data={e} />)}
						</tbody>
					</Table>
				</DivOver>
		</>
	)
}

export default PlayerList
