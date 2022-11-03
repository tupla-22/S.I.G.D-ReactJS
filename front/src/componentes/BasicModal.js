import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	height: "70%",
	width: "90%",
	bgcolor: "background.paper",
	boxShadow: 24,
    p: 4,
	borderRadius: "15px",
	display: "flex",
	flexDirection: "column",
	alignItems:"center"
}

export default function BasicModal({ children,contenido,textBtn}) {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div>
			<Button onClick={handleOpen}>{textBtn}</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
                <Box sx={style}>
                    {children}
				</Box>
			</Modal>
		</div>
	)
}
