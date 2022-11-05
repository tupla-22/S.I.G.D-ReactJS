import Main from "../../../componentes/styledComponents/Main"
import TeamSearch from "./TeamSearch"
import LeagueUpdateForm from "./LeagueUpdateForm"
import React, { useState, useEffect } from "react"
import LeagueUpdateCard from "./LeagueUpdateCard"
import AlertSuccees from "../../../componentes/AlertSuccees"
import LeagueList from "./LeagueList"

const LeagueUpdate = () => {
	const [league, setleague] = useState(null)
	const [ok, setOk] = useState(false)
	const [error, setError] = useState(false);
	return (
		<>
			{error && <AlertSuccees severity={"error"}/>}
			{ok && <AlertSuccees/>}
			<Main>
				{ok && <AlertSuccees />}
				{league && <LeagueUpdateCard setError={setError} setOk={setOk} setleague={setleague} league={league} />}
				<LeagueUpdateForm  setError={setError} setOk={setOk} setleague={setleague}></LeagueUpdateForm>
				<LeagueList></LeagueList>
			</Main>
		</>
	)
}

export default LeagueUpdate
