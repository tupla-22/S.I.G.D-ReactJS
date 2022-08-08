import { Route, Routes, Params } from "react-router-dom";
import "./App.css";
import useUser from "./hooks/useUser";
import Help from "./pages/Help";
import Fixture from "./componentes/Fixture";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ChangePassword from "./componentes/ChangePassword";
import Profile from "./componentes/Profile";
import HomeStudent from "./pages/student/HomeStudent";
import Error404 from "./componentes/Error404";
import HomeAdmin from "./pages/admin/HomeAdmin";
import UserAdd from "./pages/admin/componentes/UserAdd";
import TeamsAll from "./componentes/TeamsAll";
import Teams from "./componentes/Teams";
import MyTeam from "./pages/student/MyTeam";
import Stats from "./pages/student/componentes/Stats";
import History from "./pages/student/componentes/History";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminTeams from "./pages/admin/AdminTeams";
import changePassword from "./componentes/ChangePassword";
import UserUpdate from "./pages/admin/componentes/UserUpdate";
import UserDelete from "./pages/admin/componentes/UserDelete";
import TeamAdd from "./pages/admin/componentes/TeamAdd";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Login />}></Route>
          <Route path="help" element={<Help />}></Route>
        </Route>
        <Route path="/student/:userId" element={<HomeStudent />}>
          <Route path="history" element={<History />}></Route>
          <Route path="HomeStudent" element={<Fixture />} />
          <Route path="teams" element={<Teams />}>
            <Route path="teamsAll" element={<TeamsAll />}></Route>
            <Route path="myTeam" element={<MyTeam />}></Route>
          </Route>
          <Route path="myStats" element={<Stats />}></Route>
          <Route path="profile" element={<Profile />}>
            <Route path="changePassword" element={<ChangePassword />}></Route>
          </Route>
        </Route>
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
          <Route path="adminTeams" element={<AdminTeams />}>
            <Route path="teamAdd" element={<TeamAdd></TeamAdd>}></Route>
          </Route>
          <Route path="profile" element={<Profile />}>
            <Route path="changePassword" element={<ChangePassword />}></Route>
          </Route>
          <Route path="homeAdmin"></Route>
        </Route>
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
