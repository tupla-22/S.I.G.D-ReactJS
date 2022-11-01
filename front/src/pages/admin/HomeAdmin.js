import { Outlet } from "react-router-dom"
import NavAfterLogin from "../../componentes/NavAfterLogin"
import NavLink from "../../componentes/NavLink"
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import JoinInnerTwoToneIcon from '@mui/icons-material/JoinInnerTwoTone';
import { useContext } from "react"
import LanguajeContext from "../../contexts/LanguajeContext"
import SportsVolleyballTwoToneIcon from '@mui/icons-material/SportsVolleyballTwoTone';

const HomeAdmin = () => {
  const {text} = useContext(LanguajeContext)


	const pages = [
		<NavLink to="home" classAdd="responsive">
			<HomeTwoToneIcon/> {text.inicio}
		</NavLink>,
		<NavLink to="adminUsers/add" classAdd="responsive ">
			<PeopleAltTwoToneIcon/> {text.usuarios}
		</NavLink>,
		<NavLink to="adminTeams/add" classAdd="responsive">
			<GroupsTwoToneIcon/> {text.equipos}
		</NavLink>,
		<NavLink to="championship/add" classAdd="responsive">
			<EmojiEventsTwoToneIcon/> {text.campeonatos}
		</NavLink>,
		<NavLink to="match/add" classAdd="responsive">
			<JoinInnerTwoToneIcon/> {text.partidos}
		</NavLink>,
		<NavLink to="sports/add" classAdd="responsive">
			<SportsVolleyballTwoToneIcon/> {text.deportes}
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
