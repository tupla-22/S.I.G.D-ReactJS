import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import Main from "../../componentes/styledComponents/Main";
import DTBar from "./componentes/DTBar";

const HomeDT = () => {
  const pages = [
    <NavLink to="home" classAdd="responsive">
      Home
    </NavLink>,
    <NavLink to="myteams" classAdd="responsive">
      Mis equipos
    </NavLink>,
    <NavLink to="adminTeams/add" classAdd="responsive">
      Equipos
    </NavLink>,
    <NavLink to="championshipsLoad/add" classAdd="responsive">
      Campeonatos
    </NavLink>,
  ];
  return (
    <>
      <NavAfterLogin pages={pages} />
      <DivFondo>
        <Outlet></Outlet>
      </DivFondo>
    </>
  );
};

export default HomeDT;
