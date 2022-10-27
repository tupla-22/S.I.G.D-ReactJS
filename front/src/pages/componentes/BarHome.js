import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import NavLink from "../../componentes/NavLink"
import logo from "../../media/icons/logo_small.png"
import "./styles/bar.css"
import LanguajeContext from "../../contexts/LanguajeContext"
import EngOrSpan from "../../componentes/EngOrSpan"
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone"
import HelpCenterTwoToneIcon from "@mui/icons-material/HelpCenterTwoTone"
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone"

function BarHome() {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const { text } = React.useContext(LanguajeContext)

	const pages = [
		<NavLink classAdd={"responsive NavLink"} to="">
			<HomeTwoToneIcon /> {text.inicio}
		</NavLink>,
		<NavLink classAdd={"responsive NavLink"} to="help">
			<HelpCenterTwoToneIcon />
			{text.ayuda}
		</NavLink>,
		<NavLink classAdd={"responsive NavLink"} to="login">
			<LoginTwoToneIcon />
			{text.entrar}
		</NavLink>,
	]

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						<img alt="LOGO" className="logoBar" src={logo}></img>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page,i) => (
                                <MenuItem key={ "page"+i} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						<img alt="LOGO" className="logoBar" src={logo}></img>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page,i) => (
							<Button
								key={"page2"+i}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box>
					<EngOrSpan />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default BarHome
