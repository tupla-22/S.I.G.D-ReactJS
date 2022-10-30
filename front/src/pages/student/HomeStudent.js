import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import HistoryTwoToneIcon from '@mui/icons-material/HistoryTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';

const HomeStudent = () => {
  const pages = [
    <NavLink to="home/fixtureFB" classAdd="responsive">
     <DateRangeTwoToneIcon/> Fixture
    </NavLink>,
    <NavLink classAdd="responsive" to="myStats">
     <QueryStatsTwoToneIcon/> Mis estadisticas
    </NavLink>,
    <NavLink classAdd="responsive" to="history">
     <HistoryTwoToneIcon/> Historial
    </NavLink>,
    <NavLink classAdd="responsive" to="teams/myTeam">
     <GroupsTwoToneIcon/> Equipos
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
