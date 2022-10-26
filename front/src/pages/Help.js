import styled from "styled-components"
import Article from "../componentes/styledComponents/Article"
import Main from "../componentes/styledComponents/Main"
import { PW } from "../componentes/styledComponents/PW"
import { H3 } from "../componentes/styledComponents/H3"
import "./Help.css"
import { H2 } from "../componentes/styledComponents/H2"
import { Collapse, FormControlLabel, Switch } from "@mui/material"
import React, { useState, useEffect } from "react"

const Help = () => {
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		setChecked(true)
	}, [])
	return (
		<Main>
			<Article>
				<H2>Sistema informático de gestión deportiva</H2>
				<PW>
					Esta aplicación fue creada para poder llevar a cabo la gestión de los deportes realizados en la
					institución UTU. <br />y así realizar estadísticas de los jugadores y equipos que pertenezcan a
					esta web
				</PW>
			</Article>
			<Article>
				<H2>¿Problemas para iniciar sesión?</H2>
				<PW>
					En dicho caso deberá comunicarse con su director tércnico e informarle de esa situación para poder
					solucionarlo.
				</PW>
			</Article>
		</Main>
	)
}

export default Help
