import { useState } from "react"
import Main from "../../../componentes/styledComponents/Main"
import LeagueDelForm from "./LeagueDelForm"
import LueagueList from "./LeagueList"
const LeagueDelete = () => {
	const [idDel, setIdDel] = useState("")

	return (
		<>
			<Main>
				<LueagueList/>
			</Main>
		</>
	)
}

export default LeagueDelete
