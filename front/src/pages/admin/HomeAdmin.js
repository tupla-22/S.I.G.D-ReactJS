import { Outlet } from "react-router-dom"
import NavAfterLogin from "../../componentes/NavAfterLogin"
import NavLink from "../../componentes/NavLink"
import { DivFondo } from "../../componentes/styledComponents/DivFondo"
import Main from "../../componentes/styledComponents/Main"
import AdminBar from "./componentes/AdminBar"
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import JoinInnerTwoToneIcon from '@mui/icons-material/JoinInnerTwoTone';

const HomeAdmin = () => {
	const pages = [
		<NavLink to="home" classAdd="responsive">
			<HomeTwoToneIcon/> Home
		</NavLink>,
		<NavLink to="adminUsers/add" classAdd="responsive ">
			<PeopleAltTwoToneIcon/> Usuarios
		</NavLink>,
		<NavLink to="adminTeams/add" classAdd="responsive">
			<GroupsTwoToneIcon/> Equipos
		</NavLink>,
		<NavLink to="championship/add" classAdd="responsive">
			<EmojiEventsTwoToneIcon/> Campeonatos
		</NavLink>,
		<NavLink to="match/add" classAdd="responsive">
			<JoinInnerTwoToneIcon/> Partidos
		</NavLink>,
	]
	return (
		<>
			<NavAfterLogin pages={pages} />
				<Outlet />
		</>
	)
}

export default HomeAdmin
