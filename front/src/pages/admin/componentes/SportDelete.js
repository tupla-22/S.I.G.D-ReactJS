import UserDelForm from "./UserDelForm"
import { useState } from "react"
import UserSearch from "./UserSearch"
import Main from "../../../componentes/styledComponents/Main"
import TeamDelForm from "./TeamDelForm"
import TeamSearch from "./TeamSearch"
import SportList from "./SportList"
import SportDelForm from "./SportDelForm"
const SportDelete = () => {
	const [idDel, setIdDel] = useState("")

	return (
		<>
			<Main>
				<SportDelForm/>
				<SportList/>
			</Main>
		</>
	)
}

export default SportDelete
