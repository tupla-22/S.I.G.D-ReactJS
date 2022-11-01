
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { getUser } from "../functions/globals"
import BarHome from "./componentes/BarHome"
import "./Home.css"
const Home = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const user = getUser()

		if (user != undefined) {
			switch (user.id_rol_usuario) {
				case 1:
					navigate(`/admin/${user.id_usuario}/home`)
					break
				case 2:
					navigate(`/administrative/${user.id_usuario}/home`)
					break
				case 3:
					navigate(`/student/${user.id_usuario}/home`)
					break
				case 4:
					navigate(`/scout/${user.id_usuario}/home`)
					break
				case 5:
					navigate(`/judge/${user.id_usuario}/home`)
					break
				case 6:
					navigate(`/dt/${user.id_usuario}/home`)
					break
				case 7:
					navigate(`/analist/${user.id_usuario}/home`)
					break
			}
		}
	}, [])

	return (
		<div className="home">
			<BarHome />
			<Outlet />
		</div>
	)
}

export default Home
