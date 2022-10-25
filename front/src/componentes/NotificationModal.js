import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import DoneAllIcon from "@mui/icons-material/DoneAll"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 300,
	bgcolor: "background.paper",
	border: "1px solid #aaa",
	boxShadow: 24,
	p: 4,
	borderRadius: "15px",
}

export default function NotificationModal({ state, text }) {
	const [open, setOpen] = React.useState(state)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-description" sx={{ mt: 1 }}>
						{text} <DoneAllIcon color="success" />
					</Typography>
				</Box>
			</Modal>
		</div>
	)
}
