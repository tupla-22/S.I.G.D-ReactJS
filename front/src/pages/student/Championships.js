import { useContext } from "react"
import { Outlet } from "react-router-dom"
import NavLink from "../../componentes/NavLink"
import Main from "../../componentes/styledComponents/Main"
import LanguajeContext from "../../contexts/LanguajeContext"
import AdminNav from "../admin/componentes/AdminNav"
import ChampionshipList from "../admin/componentes/ChampionshipList"

const Championships = () => {

    const {text}=useContext(LanguajeContext)

    const pages = [<NavLink to={"closed"} >{ text.abiertos}</NavLink>, <NavLink to={"open"} >{ text.cerrados}</NavLink>]

	return (
		<>
			<AdminNav pages={pages} />
			<Main>
				<Outlet />
			</Main>
		</>
	)
}

export default Championships
