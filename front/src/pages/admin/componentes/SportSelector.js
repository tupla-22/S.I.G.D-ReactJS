import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { BoxFlex } from "../../../componentes/BoxFlex"
import CardA from "../../../componentes/Card"
import Main from "../../../componentes/styledComponents/Main"
import React, { useState } from "react"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"

const SportSelector = ({ routeAdd }) => {
	const [sports, setSports] = useState([])

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
			<Main>
				<BoxFlex>
					{sports.map((e) => (
						<CardA
							to={`../${e.id_deporte}/${routeAdd || ""}`}
							url="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju"
							name={e.id_deporte}
						></CardA>
					))}
				</BoxFlex>
				<Outlet />
			</Main>
		</>
	)
}

export default SportSelector
