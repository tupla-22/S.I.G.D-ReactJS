
import { useState } from "react"
import Main from "../../../componentes/styledComponents/Main"
import SportList from "./SportList"
import SportDelForm from "./SportDelForm"
const SportDelete = () => {
	const [idEliminado, setIdEliminado] = useState("");

	return (
		<>
			<Main>
				
				<SportDelForm setIdEliminado={setIdEliminado} />
				<SportList idEliminado={idEliminado}/>
			</Main>
		</>
	)
}

export default SportDelete
