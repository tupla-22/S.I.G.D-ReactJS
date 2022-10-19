import { Outlet } from "react-router-dom";
import AdminBar from "./componentes/AdminBar";

const HomeAdmin = () => {
    return ( 
        <div className="homeAdmin">
            <AdminBar></AdminBar>
            <Outlet/>
        </div>
     );
}
 
export default HomeAdmin;