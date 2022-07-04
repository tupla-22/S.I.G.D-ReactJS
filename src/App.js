import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import StudentHome from "./pages/student/StudentHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="ayuda" element></Route>
          <Route path="login"></Route>
        </Route>
        <Route path="/StudentHome" element={<StudentHome/>}>
          <Route path="myTeams"/>
          <Route/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
