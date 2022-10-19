import { Route } from "react-router-dom";
import AllTeams from "../../componentes/AllTeams";
import ChangePassword from "../../componentes/ChangePassword";
import Fixture from "../../componentes/Fixture";
import MatchesHistory from "../../componentes/MatchesHistory";
import Profile from "../../componentes/Profile";
import Teams from "../../componentes/Teams";
import Stats from "../student/componentes/Stats";
import HomeStudent from "../student/HomeStudent";
import MyTeam from "../student/MyTeam";

const StudentRoutes = () => {
    return ( 
        <Route path="/student/:userId" element={<HomeStudent />}>
            <Route path="history" element={<MatchesHistory />}></Route>
            <Route path="HomeStudent" element={<Fixture />} />
            <Route path="teams" element={<Teams />}>
              <Route path="teamsAll" element={<AllTeams />}></Route>
              <Route path="myTeam" element={<MyTeam />}></Route>
            </Route>
            <Route path="myStats" element={<Stats />}></Route>
            <Route path="profile" element={<Profile />}>
              <Route path="changePassword" element={<ChangePassword />}></Route>
            </Route>
        </Route>
     );
}
 
export default StudentRoutes;