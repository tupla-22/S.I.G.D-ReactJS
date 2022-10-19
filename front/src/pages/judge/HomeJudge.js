import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";

const HomeJudge = () => {
  const pages = [
    <NavLink to={"home"} classAdd={"responsive"}>
      Home
    </NavLink>,
    <NavLink to={"checkStats"} classAdd={"responsive"}>
      Comprobar estadísticas
    </NavLink>,
  ];

  return (
    <>
      <NavAfterLogin pages={pages}></NavAfterLogin>
      <Outlet />
    </>
  );
};

export default HomeJudge;
