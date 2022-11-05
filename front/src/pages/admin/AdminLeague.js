import { useContext } from "react"
import { Outlet } from "react-router-dom"
import NavLink from "../../componentes/NavLink"
import LanguajeContext from "../../contexts/LanguajeContext"
import AdminNav from "./componentes/AdminNav"

const AdminLeague = () => {
	const { text } = useContext(LanguajeContext)

	const pages = [
		<NavLink to={"add"}>{text.agregar}</NavLink>,
		<NavLink to={"delete"}>{text.eliminar}</NavLink>,
		<NavLink to={"update"}>{text.actualizar}</NavLink>,
	]

	return (
		<>
			<AdminNav pages={pages} />
			<Outlet />
		</>
	)
}

export default AdminLeague
