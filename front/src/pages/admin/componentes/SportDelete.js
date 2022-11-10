
import { useState } from "react"
import Main from "../../../componentes/styledComponents/Main"
import SportList from "./SportList"
const SportDelete = () => {
	const [idEliminado, setIdEliminado] = useState("");

	return (
		<>
			<Main>
				<SportList idEliminado={idEliminado}/>
			</Main>
		</>
	)
}

export default SportDelete
