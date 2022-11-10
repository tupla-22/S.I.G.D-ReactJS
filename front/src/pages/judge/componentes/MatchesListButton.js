import { Button } from "@mui/material"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Form from "../../../componentes/Form"
import { PAlert } from "../../../componentes/PAlert"
import { GridContained } from "../../../componentes/styledComponents/GridContained"
import { Seccion } from "../../../componentes/styledComponents/Seccion"
import { Table } from "../../../componentes/styledComponents/Table"
import { urlApi } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import MatchListRow from "../../admin/componentes/MatchListRow"

const peticion = helpHttp()

const MatchesListButtons = ({ sport }) => {
	const [matches, setMatches] = useState([])
	const [errors, setErrors] = useState(false)
	const [idPartido, setIdPartido] = useState("")
	const navigate = useNavigate()

	useEffect(() => {
		peticion
			.get(urlApi(`matcheck?disputed=1&verificado=0&sport=handball,basketball,football&orderBy=id_partido&orderMode=asc&startAt=0`))
			.then((e) => {
				if (!e.status == 200) setErrors(true)
				setMatches(e.result)
				console.log(e)
			})
	}, [sport])

	const handleClick = (e) => {}

	return (
		<Seccion>
			<h3>Indica el partido a supervisar</h3>
			<Table>
				<thead></thead>
				<tbody>
					{errors ? (
						<PAlert>Ocurrió un error</PAlert>
					) : (
						matches.map((e, i) => (
							<Button
								onClick={(event) => {
									navigate(`../checkMatch/${e.id_partido}`)
								}}
								key={e.id_partido}
							>
								{<MatchListRow data={e} />}
							</Button>
						))
					)}
				</tbody>
			</Table>
		</Seccion>
	)
}

export default MatchesListButtons
