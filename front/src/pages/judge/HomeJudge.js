import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";

const HomeJudge = () => {
    const pages = []

    return ( 
        <>
            <NavAfterLogin pages={pages}></NavAfterLogin>
            <Outlet/>
        </>
     );
}
 
export default HomeJudge;