import { Outlet } from "react-router-dom"
import NavAfterLogin from "../../componentes/NavAfterLogin"
import NavLink from "../../componentes/NavLink"
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import { useContext } from "react";
import LanguajeContext from "../../contexts/LanguajeContext";

const HomeJudge = () => {

	const {text } = useContext(LanguajeContext)

	const pages = [
		<NavLink to={"home"} classAdd={"responsive"}>
			<HomeTwoToneIcon /> { text.inicio}
		</NavLink>,
		<NavLink to={"selectSportcheckStats"} classAdd={"responsive"}>
			<CheckBoxTwoToneIcon/> {text.comprobarEstadisticas}
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
