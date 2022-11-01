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


	return (
		<>
			<MatchList sport={sport} />
		</>
	)
}

export default MatchesListButtons
