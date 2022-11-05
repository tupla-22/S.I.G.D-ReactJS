import { DivOver } from "../../../componentes/DivOver"
import { TH } from "../../../componentes/styledComponents/TH"
import TeamsListRow from "./TeamsListRow"
import React, { useState, useEffect, useContext } from "react"
import { Table } from "../../../componentes/styledComponents/Table"
import { getUser, urlApi } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import LanguajeContext from "../../../contexts/LanguajeContext"

const peticion = helpHttp()

const LueagueList = () => {
	const [data, setData] = useState([])
	const [status, setStatus] = useState(false)

	const { text } = useContext(LanguajeContext)
	const user = getUser()

	useEffect(() => {
		let url=`ligas?select=*`

		peticion.get(urlApi(url)).then((dat) => {
			console.log(dat)
			if (dat.status == 200) {
				setData(dat.result)
				setStatus(true)
			}
		})
	}, [])

	return (
		<>
			<h3>{text.equipos}</h3>
			<DivOver>
				<Table>
					<thead>
						<TH>{text.nombre}</TH>
						<TH>{text.deporte}</TH>
						<TH>ID</TH>
					</thead>

					<tbody>{status && data.map((e) => <TeamsListRow key={e.id_liga + "equipo"} data={e} />)}</tbody>
				</Table>
			</DivOver>
		</>
	)
}

export default LueagueList
