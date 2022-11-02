
import React, { useState, useEffect } from "react"
import { helpHttp } from "../../../helpers/helpHttp"
import MatchList from "../../admin/componentes/MatchList"

const peticion = helpHttp()

const MatchesListButtons = ({ sport }) => {


	return (
		<>
			<MatchList sport={sport} />
		</>
	)
}

export default MatchesListButtons
