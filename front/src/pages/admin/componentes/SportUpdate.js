import Main from "../../../componentes/styledComponents/Main"
import TeamSearch from "./TeamSearch"
import TeamUpdateForm from "./TemaUpdateForm"
import React, { useState, useEffect } from "react"
import TeamUpdateCard from "./TeamUpdateCard"
import AlertSuccees from "../../../componentes/AlertSuccees"
import SportList from "./SportList"

const SportUpdate = () => {
	const [team, setTeam] = useState(null)
    const [ok, setOk] = useState(false);
	return (
		<Main>

			<SportList/>
			{/* {ok && <AlertSuccees />}
			{team && <TeamUpdateCard ok={ok} setOk={setOk} setTeam={setTeam} data={team} />}
			<TeamUpdateForm setTeam={setTeam}></TeamUpdateForm>
			<TeamSearch /> */}
		</Main>
	)
}

export default SportUpdate
