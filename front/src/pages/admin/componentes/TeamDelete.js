import UserDelForm from "./UserDelForm"
import { useState } from "react"
import UserSearch from "./UserSearch"
import Main from "../../../componentes/styledComponents/Main"
import TeamDelForm from "./TeamDelForm"
import TeamSearch from "./TeamSearch"
const TeamDelete = () => {
	const [idDel, setIdDel] = useState("")

	return (
		<>
			<Main>
				<TeamSearch></TeamSearch>
			</Main>
		</>
	)
}

export default TeamDelete
