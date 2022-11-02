import DateRangeIcon from "@mui/icons-material/DateRange"
import ShieldIcon from "@mui/icons-material/Shield"
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import { Table } from "./styledComponents/Table"
import { TH } from "./styledComponents/TH"
import Main from "./styledComponents/Main"
import FixtureRow from "./FixtureRow"
import FixtureBar from "./FixtureBar"
import { Outlet } from "react-router-dom"
import AdminNav from "../pages/admin/componentes/AdminNav"
import { helpHttp } from "../helpers/helpHttp"
import { urlApi } from "../functions/globals"
import React, { useState, useEffect } from "react"
import NavLink from "./NavLink"

const Fixture = () => {
	const [sports, setSports] = useState([])

	const pages = sports.map((e) => {
		return <NavLink to={e.id_deporte}>{e.id_deporte}</NavLink>
	})

	const peticion = helpHttp()

	useEffect(() => {
		peticion.get(urlApi(`deportes?`)).then((e) => {
			if ((e.status = 200)) {
				setSports(e.result)
			}
		})
	}, [])

	return (
		<>
			<AdminNav pages={pages} />
			<Main>
				<Outlet />
			</Main>
		</>
	)
}

export default Fixture
