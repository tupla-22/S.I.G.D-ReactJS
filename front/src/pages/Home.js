import { Button } from "@mui/material"
import { useContext } from "react"
import { Outlet } from "react-router-dom"
import EngOrSpan from "../componentes/EngOrSpan"
import Link from "../componentes/Link"
import NavAfterLogin from "../componentes/NavAfterLogin"
import NavLink from "../componentes/NavLink"
import LanguajeContext from "../contexts/LanguajeContext"
import Bar from "./componentes/Bar"
import BarHome from "./componentes/BarHome"
import "./Home.css"
const Home = () => {
    

    

	return (
		<div className="home">
			<BarHome/>
			<Outlet />
		</div>
	)
}

export default Home
