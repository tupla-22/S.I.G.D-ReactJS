import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";

const HomeScout = () => {
    const pages = [
        <NavLink classAdd={"responsive"} to={"findPlayer"}>Buscar Jugador</NavLink>
    ]



    
    return ( 
        <>
        <NavAfterLogin pages={pages}/>
        <Outlet/>
        </>
     );
}
 
export default HomeScout;