import * as React from "react"
import Box from "@mui/material/Box"
import Popper from "@mui/material/Popper"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Fade from "@mui/material/Fade"
import Paper from "@mui/material/Paper"
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import { IconButton } from "@mui/material"

export default function BtnSettings({content=[]}) {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const [open, setOpen] = React.useState(false)
	const [placement, setPlacement] = React.useState()

	const handleClick = (newPlacement) => (event) => {
		setAnchorEl(event.currentTarget)
		setOpen((prev) => placement !== newPlacement || !prev)
		setPlacement(newPlacement)
	}

	return (
		<>
			<Popper open={open} anchorEl={anchorEl} placement={placement} transition>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper>
							<Typography sx={{ p: 2 }}>{content.map(e=>(e))}</Typography>
						</Paper>
					</Fade>
				)}
			</Popper>
			<IconButton onClick={handleClick("bottom")}><SettingsTwoToneIcon color="secondary"/></IconButton>
		</>
	)
}
