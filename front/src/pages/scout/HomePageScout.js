import { Outlet } from "react-router-dom"
import Main from "../../componentes/styledComponents/Main"
import { PW } from "../../componentes/styledComponents/PW"
import Welcome from "../../componentes/Welcome"

const HomePageScout = () => {
	return (
		<>
			<Main>
                <Welcome >
                    Tu siendo el reclutador puedes observar las estadísticas de todos los juugadores.<br></br>
                    Intentalo!!
                </Welcome>
				<Outlet />
			</Main>
		</>
	)
}

export default HomePageScout
