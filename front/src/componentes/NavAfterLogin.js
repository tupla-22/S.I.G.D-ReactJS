import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import NavLink from "./NavLink"
import logo from "../media/icons/logo_small.png"
import "./styles/NavAfterLogin.css"
import Link from "./Link"
import DropButton from "./DropButton"
import BtnLogOut from "./BtnLogOut"
import { ImgProfil } from "./ImgProfil"
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone"
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone"
import EngOrSpan from "./EngOrSpan"
import LanguajeContext from "../contexts/LanguajeContext"
import styled from "styled-components"

const Div = styled.div`
	display: flex;
	align-items: center;
  justify-content:space-between;
  width:110px;
`

const NavAfterLogin = ({ pages = [] }) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const { text } = React.useContext(LanguajeContext)

	const settings = [
		<Link to="profile" className={"NavLink"}>
			<AccountBoxTwoToneIcon /> {text.tuPerfil}
		</Link>,
		<BtnLogOut label={text.salir} />,
	]

	const usuario = JSON.parse(localStorage.getItem("user"))

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
					<Link to={"home"}>
						<img alt="LOGO" className="logo logoUno" src={logo}></img>
					</Link>

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
							{pages.map((page, i) => (
								<MenuItem key={"page" + i} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
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
						<Link to={"home"}>
							<img alt="LOGO" className="logo logoDos" src={logo}></img>
						</Link>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page, i) => (
							<Box
								key={"page" + i}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Box>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Div>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<ImgProfil src={usuario.fotoPerfil_usuario}></ImgProfil>
								</IconButton>
							</Tooltip>
							<EngOrSpan />
						</Div>

						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting, i) => (
								<MenuItem key={"setting" + i} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default NavAfterLogin
