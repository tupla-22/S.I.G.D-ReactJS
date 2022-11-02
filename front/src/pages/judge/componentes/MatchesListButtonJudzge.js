import { Button } from "@mui/material"
import React, { useState, useEffect } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import Form from "../../../componentes/Form"
import { PAlert } from "../../../componentes/PAlert"
import { GridContained } from "../../../componentes/styledComponents/GridContained"
import Main from "../../../componentes/styledComponents/Main"
import { Seccion } from "../../../componentes/styledComponents/Seccion"
import { Table } from "../../../componentes/styledComponents/Table"
import { urlApi } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import MatchList from "../../admin/componentes/MatchList"
import MatchListRow from "../../admin/componentes/MatchListRow"

const peticion = helpHttp()

const MatchesListButtonsJudge = () => {
	const [matches, setMatches] = useState([])
	const [errors, setErrors] = useState(false)
	const [idPartido, setIdPartido] = useState("")
	const navigate = useNavigate()

	const { sport } = useParams()
	const handleClick = (e) => {}

	return (
		<Main>
			<Outlet/>
			<MatchList disputed={1} sport={sport} />
		</Main>
	)
}

export default MatchesListButtonsJudge
