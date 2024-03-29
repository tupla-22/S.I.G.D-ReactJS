import * as React from "react"
import Box from "@mui/material/Box"
import Switch from "@mui/material/Switch"
import Paper from "@mui/material/Paper"
import Grow from "@mui/material/Grow"
import FormControlLabel from "@mui/material/FormControlLabel"
import styled from "styled-components"
import galeryLogin from "../../media/galeryLogin.jpg"
import { helpHttp } from "../../helpers/helpHttp"
import { useState, useEffect } from "react"
import { urlApi } from "../../functions/globals"
import imgLog from "../../media/soccer-gb7b8634d7_640.jpg"
const Container = styled.div`
	width: 100%;
	height: 100%;
`

const Icon = styled.section`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-auto-rows: minmax(200px, auto);
	padding: 50px;
	grid-gap: 3px;
`

const GaleriLogin = styled.img`
	border-radius: 15px;
	width: 100%;
	object-fit: cover;
	object-position: center;
`

const Div = styled.div`
	overflow: hidden;
	transition: transform 0.1s;
	border-radius: 15px;
	&:hover {
		cursor: pointer;
		transform: rotate(10deg) scale(1.2, 1.2);
	}
`

const peticion = helpHttp()

export default function StatsShower() {
	const [checked, setChecked] = React.useState(true)
	const [fotos, setFotos] = useState([])

	useEffect(() => {
		peticion.get(urlApi("usuarios?select=fotoPerfil_usuario")).then((e) => {
			console.log(e.status, "Fotos Login")
			if (e.status == 200) setFotos(e.result)
		})
	}, [])

	const handleChange = () => {
		setChecked((prev) => !prev)
	}

	return (
		<Container>
			<Grow in={true} style={{ transformOrigin: "0 0 0" }} {...(checked ? { timeout: 1000 } : {})}>
				{
					<Icon>
						{fotos.map((e, i) => (
							<Div key={`fotoLogin${i}`}>
								<GaleriLogin src={imgLog} />
							</Div>
						))}
					</Icon>
				}
			</Grow>
		</Container>
	)
}
