import { Outlet } from "react-router-dom";
import Main from "../../componentes/styledComponents/Main";
import StatsCheckList from "./componentes/StatsCeckList";

const CheckStats = () => {
  return (
    <>
      <Main>
        <StatsCheckList />
      </Main>
      <Outlet />
    </>
  );
};

export default CheckStats;
