import Main from "../../../componentes/styledComponents/Main"
import TeamUpdateForm from "./TemaUpdateForm"
import React, { useState, useEffect } from "react"
import ChampionshipSearch from "./ChampionshipSeach"
import MatchSearch from "./MatchSeach"
import MatchUpdateForm from "./MatchUpdateForm"
import MatchList from "./MatchList"
import MatchUpdateCard from "./MatchUpdateCard"
import AlertSuccees from "../../../componentes/AlertSuccees"
import { Seccion } from "../../../componentes/styledComponents/Seccion"

const MatchUpdate = () => {
	const [data, setData] = useState(null)
	const [ok, setOk] = useState(false)
	return (
		<>
			{ok && <AlertSuccees />}
			{data && <MatchUpdateCard setData={setData} setOk={setOk} data={data} />}
			<MatchUpdateForm setData={setData} />
			<MatchList sport={"all"} />
		</>
	)
}

export default MatchUpdate
