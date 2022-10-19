import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";

const HomeAnalist = () => {
  const pages = [
    <NavLink to="home" classAdd="responsive">
      Home
    </NavLink>,
    <NavLink to="matchManagment" classAdd="responsive">
      Gestionar partido
    </NavLink>,
  ];

  return (
    <>
      <NavAfterLogin pages={pages} />
      <Outlet />
    </>
  );
};

export default HomeAnalist;
