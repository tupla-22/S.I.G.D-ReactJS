import { Route, Routes,Params } from "react-router-dom";
import "./App.css";
import useUser from "./hooks/useUser";
import Help from "./pages/Ayuda";
import Home from "./pages/Home";
import Acount from "./pages/student/Acount";
import Config from "./pages/student/Config";
import MyTeam from "./pages/student/MyTeam";
import Profile from "./pages/student/Profile";
import StudentHome from "./pages/student/StudentHome";


const UserContext = useUser;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="help" element={<Help/>}></Route>
          <Route path="login"></Route>
        </Route>
        <Route path="/StudentHome/:id" element={<StudentHome/>}>
          <Route path="myTeams" element={<MyTeam/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="acount" element={<Acount/>}/>
          <Route path="config" element={<Config/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
