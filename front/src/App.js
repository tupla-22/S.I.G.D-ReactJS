import { Route, Routes,Params } from "react-router-dom";
import "./App.css";
import useUser from "./hooks/useUser";
import Help from "./pages/Help";
import Fixture from "./componentes/Fixture";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Acount from "./pages/student/Acount";
import StudentBar from "./pages/student/componentes/StudentBar";
import ChangePassword from "./componentes/ChangePassword";
import MyTeam from "./pages/student/MyTeam";
import Profile from "./pages/student/Profile";
import HomeStudent from "./pages/student/HomeStudent";
import Error404 from "./componentes/Error404";
import HomeAdmin from "./pages/admin/HomeAdmin";
import UserAdd from "./pages/admin/componentes/UserAdd";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Login/>}></Route>
          <Route path="help" element={<Help/>}></Route>
        </Route>
        <Route path="/student/:userId" element={<HomeStudent/>}>
          <Route path="HomeStudent" element={<Fixture/>}/>
          <Route path="myTeams" element={<MyTeam/>}/>
          <Route path="profile" element={<Profile/>}>
            <Route path="changePassword" element={<ChangePassword/>}></Route>
          </Route>
        </Route>
        <Route path="/admin/:userId" element={<HomeAdmin/>}>
          <Route path="userAdd" element={<UserAdd/>}/>
          <Route></Route>
        </Route>
        <Route path="/*" element={<Error404/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
