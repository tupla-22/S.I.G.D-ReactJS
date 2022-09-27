import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import Main from "../../componentes/styledComponents/Main";
import AdminBar from "./componentes/AdminBar";

const HomeAdmin = () => {
  const pages = [
    <NavLink to="home" classAdd="responsive">
      Home
    </NavLink>,
    <NavLink to="adminUsers/add" classAdd="responsive">
      Usuarios
    </NavLink>,
    <NavLink to="adminTeams/add" classAdd="responsive">
      Equipos
    </NavLink>,
    <NavLink to="championship/add" classAdd="responsive">
      Campeonatos
    </NavLink>,
    <NavLink to="match/add" classAdd="responsive">
      Partidos
    </NavLink>,
  ];
  return (
    <>
      <NavAfterLogin pages={pages} />

          
      <DivFondo>
          <Outlet /></DivFondo>
    </>
  );
};

export default HomeAdmin;
