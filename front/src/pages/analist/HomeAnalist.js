import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";

const HomeAnalist = () => {
    const pages = []

    return ( 
        <>
            <NavAfterLogin pages={pages}/>
            <Outlet/>
        </>
     );
}
 
export default HomeAnalist;