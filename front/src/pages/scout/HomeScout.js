import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";
import { useContext } from "react";
import LanguajeContext from "../../contexts/LanguajeContext";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';

const HomeScout = () => {

    const { text} = useContext(LanguajeContext)

    const pages = [
        <NavLink classAdd={"responsive"} to={"home"}><HomeTwoToneIcon /> {text.inicio}</NavLink>,
        <NavLink classAdd={"responsive"} to={"findPlayer"}><PersonSearchTwoToneIcon /> {text.buscarJugador}</NavLink>
    ]



    
    return ( 
        <>
        <NavAfterLogin pages={pages}/>
        <Outlet/>
        </>
     );
}
 
export default HomeScout;