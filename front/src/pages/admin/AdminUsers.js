import { Outlet } from "react-router-dom";
import AdminUsersBar from "./componentes/AdminUsersBar";

const AdminUsers = () => {
    return ( 
        <div>
            <AdminUsersBar/>
            <Outlet/>
        </div>
     );
}
 
export default AdminUsers;