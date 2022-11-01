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
import MatchList from "../../admin/componentes/MatchList"
import MatchListRow from "../../admin/componentes/MatchListRow"

const peticion = helpHttp()

const MatchesListButtons = ({ sport }) => {
	const [matches, setMatches] = useState([])
	const [errors, setErrors] = useState(false)
	const [idPartido, setIdPartido] = useState("")
	const navigate = useNavigate()

	useEffect(() => {
		peticion
			.get(urlApi(`matcheck?disputed=0&sport=${sport}&orderBy=id_partido&orderMode=asc&startAt=0`))
			.then((e) => {
				if (!e.status == 200) setErrors(true)
				setMatches(e.result)
				console.log(e)
			})
	}, [sport])

	const handleClick = (e) => {}

	return (
		<>
			<MatchList sport={sport} />

			<Seccion>
				<h3>Indica el partido a supervisar</h3>
				<Table>
					<tbody>
						{errors ? (
							<PAlert>Ocurrió un error</PAlert>
						) : (
							matches.map((e, i) => (
								<Button
									onClick={(event) => {
										navigate(`../lookMatch/${e.id_partido}`)
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
		</>
	)
}

export default MatchesListButtons
