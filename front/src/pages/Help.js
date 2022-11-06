import styled from "styled-components"
import Article from "../componentes/styledComponents/Article"
import Main from "../componentes/styledComponents/Main"
import { PW } from "../componentes/styledComponents/PW"
import { H3 } from "../componentes/styledComponents/H3"
import "./Help.css"
import { H2 } from "../componentes/styledComponents/H2"
import { Collapse, FormControlLabel, Switch } from "@mui/material"
import React, { useState, useEffect } from "react"
import { useContext } from "react"
import LanguajeContext from "../contexts/LanguajeContext"

const Help = () => {
	const [checked, setChecked] = useState(false)

	const {text} = useContext(LanguajeContext)

	useEffect(() => {
		setChecked(true)
	}, [])
	return (
		<Main>
			<Article>
				<H2>{text.sigd}</H2>
				<PW>
					{text.WHOME}
				</PW>
			</Article>
			<Article>
				<H2>{text.problemasParaIniciarSesion}</H2>
				<PW>
					{text.endicho}
				</PW>
			</Article>
		</Main>
	)
}

export default Help
