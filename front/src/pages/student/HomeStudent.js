import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";
import StudentBar from "./componentes/StudentBar";

const HomeStudent = () => {
  const pages = [
    <NavLink to="home" classAdd="responsive">
      Fixture
    </NavLink>,
    <NavLink classAdd="responsive" to="myStats">
      Mis estadisticas
    </NavLink>,
    <NavLink classAdd="responsive" to="history">
      Historial
    </NavLink>,
    <NavLink classAdd="responsive" to="teams/myTeam">
      Equipos
    </NavLink>,
  ];

  return (
    <div className="studentHome">
      <NavAfterLogin pages={pages} />
      <Outlet />
    </div>
  );
};

export default HomeStudent;
