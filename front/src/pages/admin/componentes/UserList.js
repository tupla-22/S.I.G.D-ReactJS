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

const UserList = () => {
  const [data, setData] = useState([])
  const [status, setStatus] = useState(false)
  const [userType, setUserType] = useState({})
  const peticion = helpHttp()

  const { text } = useContext(LanguajeContext)

  const user = getUser()
	useEffect(() => {
		peticion.get(urlApi("usuarios?select=*")).then((dat) => {
			setData(dat.result)
			setStatus(true)
		})
    userVerifier(setUserType, userType)
	}, [])

	return (
		<>
			<h3>{text.usuarios}</h3>
			<DivOver>
				<Table>
					<thead>
						<TH>{text.nombre}</TH>
						<TH>{text.apellido}</TH>
						<TH>{text.cedula}</TH>
						<TH>{text.correoElectronico}</TH>
						<TH>{text.fechaDeNacimiento}</TH>
            <TH>{text.rol}</TH>
					</thead>

					<tbody>{status && data.map((e) => <UserListRow key={e.ci_usuario} data={e} />)}</tbody>
				</Table>
			</DivOver>
		</>
	)
}

export default UserList
