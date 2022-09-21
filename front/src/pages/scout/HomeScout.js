import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";

const HomeScout = () => {
    const pages = []



    
    return ( 
        <>
        <NavAfterLogin pages={pages}/>
        <Outlet/>
        </>
     );
}
 
export default HomeScout;