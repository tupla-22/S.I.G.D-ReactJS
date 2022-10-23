import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import Main from "../../componentes/styledComponents/Main";

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
      <Main>
          <Outlet/>
      </Main>
    </>
  );
};

export default HomeAnalist;
