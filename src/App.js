import { Route, Routes,Params } from "react-router-dom";
import "./App.css";
import useUser from "./hooks/useUser";
import Help from "./pages/Ayuda";
import Fixture from "./pages/componentes/Fixture";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Acount from "./pages/student/Acount";
import StudentBar from "./pages/student/componentes/StudentBar";
import Config from "./pages/student/Config";
import MyTeam from "./pages/student/MyTeam";
import Profile from "./pages/student/Profile";
import HomeStudent from "./pages/student/HomeStudent";
import Error404 from "./componentes/Error404";



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
          <Route path="profile" element={<Profile/>}/>
          <Route path="acount" element={<Acount/>}/>
          <Route path="config" element={<Config/>}/>
        </Route>
        <Route path="/*" element={<Error404/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
