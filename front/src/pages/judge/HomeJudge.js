import { Outlet } from "react-router-dom"
import NavAfterLogin from "../../componentes/NavAfterLogin"
import NavLink from "../../componentes/NavLink"
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';

const HomeJudge = () => {
	const pages = [
		<NavLink to={"home"} classAdd={"responsive"}>
			<HomeTwoToneIcon/> Home
		</NavLink>,
		<NavLink to={"checkStats"} classAdd={"responsive"}>
			<CheckBoxTwoToneIcon/> Comprobar estadísticas
		</NavLink>,
	]

	return (
		<>
			<NavAfterLogin pages={pages}></NavAfterLogin>
			<Outlet />
		</>
	)
}

export default HomeJudge
