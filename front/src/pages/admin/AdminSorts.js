import { useContext } from "react"
import { Outlet } from "react-router-dom"
import NavLink from "../../componentes/NavLink"
import LanguajeContext from "../../contexts/LanguajeContext"
import AdminNav from "./componentes/AdminNav"

const AdminSports = () => {

    const {text} = useContext(LanguajeContext)


    const pages = [<NavLink to={"add"}>{text.agregar}</NavLink>, <NavLink to={"delete"}>{text.lista}</NavLink>]

	return (
		<>
			<AdminNav pages={pages} />
			<Outlet />
		</>
	)
}

export default AdminSports
