import { Outlet } from "react-router-dom"
import Main from "../../componentes/styledComponents/Main"
import MatchesListButtons from "./componentes/MatchesListButton"
import MatchManagment from "./componentes/MatchManagment"
import StatsCheckList from "./componentes/StatsCeckList"

const CheckStats = () => {
	return (
		<>
			<Main>
				<MatchesListButtons />
			</Main>
			<Outlet />
		</>
	)
}

export default CheckStats
