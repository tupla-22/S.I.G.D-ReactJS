import { Route } from "react-router-dom";
import ChangePassword from "../../componentes/ChangePassword";
import Profile from "../../componentes/Profile";
import AdminTeams from "../admin/AdminTeams";
import AdminUsers from "../admin/AdminUsers";
import TeamAdd from "../admin/componentes/TeamAdd";
import TeamDelete from "../admin/componentes/TeamDelete";
import TeamUpdate from "../admin/componentes/TeamUpdate";
import UserAdd from "../admin/componentes/UserAdd";
import UserDelete from "../admin/componentes/UserDelete";
import UserUpdate from "../admin/componentes/UserUpdate";
import HomeAdm from "../admin/HomePageAdmin";
import HomeAdmin from "../admin/HomeAdmin";

const AdminRoutes = () => {
    return ( 
        <Route path="/admin/:userId" element={<HomeAdmin />}>
            <Route path="userAdd" element={<UserAdd />} />
            <Route path="adminUsers" element={<AdminUsers />}>
              <Route path="userAdd" element={<UserAdd />}>
                {" "}
              </Route>
              <Route path="userUpdate" element={<UserUpdate />}>
                {" "}
              </Route>
              <Route path="userDelete" element={<UserDelete />}>
                {" "}
              </Route>
            </Route>
            <Route path="adminTeams" element={<AdminTeams/>}>
              <Route path="teamAdd" element={<TeamAdd></TeamAdd>}></Route>
              <Route path="teamDelete" element={<TeamDelete />}></Route>
              <Route path="teamUpdate" element={<TeamUpdate />}></Route>
            </Route>
            <Route path="profile" element={<Profile />}>
              <Route path="changePassword" element={<ChangePassword />}></Route>
            </Route>
            <Route path="homeAdmin" element={<HomeAdm></HomeAdm>}></Route>
        </Route>
     );
}
 
export default AdminRoutes;