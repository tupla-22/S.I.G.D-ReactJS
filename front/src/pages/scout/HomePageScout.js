import { useContext } from "react"
import { Outlet } from "react-router-dom"
import Main from "../../componentes/styledComponents/Main"
import { PW } from "../../componentes/styledComponents/PW"
import Welcome from "../../componentes/Welcome"
import LanguajeContext from "../../contexts/LanguajeContext"

const HomePageScout = () => {

	const {text} = useContext(LanguajeContext)

	return (
		<>
			<Main>
                <Welcome >
                    {text.bienvenidaReclutador}
                </Welcome>
				<Outlet />
			</Main>
		</>
	)
}

export default HomePageScout
