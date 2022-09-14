import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";
import AdminBar from "./componentes/AdminBar";

const HomeAdmin = () => {
  const pages = [
    <NavLink to="homeAdmin" classAdd="responsive">
      Home
    </NavLink>,
    <NavLink to="adminUsers/userAdd" classAdd="responsive">
      Usuarios
    </NavLink>,
    <NavLink to="adminTeams/teamAdd" classAdd="responsive">
      Equipos
    </NavLink>,
  ];
  return (
    <div className="homeAdmin">
        <NavAfterLogin pages={pages}/>
      <Outlet />
    </div>
  );
};

export default HomeAdmin;
