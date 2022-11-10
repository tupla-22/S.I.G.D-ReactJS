import UserDelForm from "./UserDelForm"
import { useState } from "react"
import UserSearch from "./UserSearch"
import Main from "../../../componentes/styledComponents/Main"
import TeamDelForm from "./TeamDelForm"
import TeamSearch from "./TeamSearch"
import CategoriesDelForm from "./CategoriesDelForm"
const CategoriesDelete = () => {
	const [idDel, setIdDel] = useState("")

	return (
		<>
			<Main>
				<CategoriesDelForm/>
			</Main>
		</>
	)
}

export default CategoriesDelete
