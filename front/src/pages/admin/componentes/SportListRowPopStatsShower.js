import * as React from "react"
import Popper from "@mui/material/Popper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Fade from "@mui/material/Fade"
import Paper from "@mui/material/Paper"
import { useState, useEffect } from "react"
import { urlApi } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import {  BoxAlCen } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import TouchAppTwoToneIcon from "@mui/icons-material/TouchAppTwoTone"
import ChangeCircleTwoToneIcon from "@mui/icons-material/ChangeCircleTwoTone"
import styled from "styled-components"


const B = styled.b`
color:#000b;
`

export default function SportListRowPopStatsShower({ sport }) {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const [open, setOpen] = React.useState(false)
	const [placement, setPlacement] = React.useState()
	const [stats, setStats] = useState([])

	const peticion = helpHttp()

	const handleClick = (newPlacement) => (event) => {
		setAnchorEl(event.currentTarget)
		setOpen((prev) => placement !== newPlacement || !prev)
		setPlacement(newPlacement)
	}

	useEffect(() => {
		peticion.get(urlApi(`conciben?select=*&linkTo=id_deporte_concibe&equalTo=${sport}`)).then((dat) => {
			if (dat.status == 200) {
				setStats(dat.result)
			}
		})
	}, [sport])

	return (
		<>
			<Popper open={open} anchorEl={anchorEl} placement={placement} transition>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper>
							<Typography sx={{ p: 2 }}>
								{stats.map((e) => (
									<>
										<BoxAlCen>
											{" "}
											<ChangeCircleTwoToneIcon color="success" />
											<B> {e.id_tipoEstadistica_concibe}</B>
										</BoxAlCen>{" "}
										<br />
									</>
								))}
							</Typography>
						</Paper>
					</Fade>
				)}
			</Popper>
			<Button color="secondary" onClick={handleClick("bottom-end")}>
				<TouchAppTwoToneIcon /> Estadisticas
			</Button>
		</>
	)
}
