import * as React from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import LanguajeContext from "../../../contexts/LanguajeContext"
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone"
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import { useState, useEffect } from 'react';
import { H3B } from "../../../componentes/styledComponents/ComponentesDeEstilos"



const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	borderRadius: "15px",
	transform: "translate(-50%, -50%)",
	width: "100%",
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
}

export default function ModalChampionship({ children,idChampionship }) {
    const [open, setOpen] = React.useState("")
    const [campeonato, setCampeonato] = useState({});
	const handleOpen = () => setOpen(true)
	const handleClose = (e) => {
		setOpen(false)
	}

    const { text } = React.useContext(LanguajeContext)
    const peticion = helpHttp()
    
    useEffect(() => {
        peticion.get(urlApi(``))
    }, []);

	return (
		<div>
			<ButtonClassic onClick={handleOpen}>{children}</ButtonClassic>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
                <Fade in={open}>
                    
					<Box sx={style}>
						<Typography id="transition-modal-title" variant="h6" component="h2">
							<H3B>Información del campeonato</H3B>
						</Typography>
						<Typography id="transition-modal-description" sx={{ mt: 2 }}></Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	)
}
