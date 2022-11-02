import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import HistoryTwoToneIcon from '@mui/icons-material/HistoryTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import { useContext } from "react";
import LanguajeContext from "../../contexts/LanguajeContext";
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

const HomeStudent = () => {

  const { text} = useContext(LanguajeContext)

  const pages = [
    <NavLink to="home" classAdd="responsive">
      <HomeTwoToneIcon /> { text.inicio}
    </NavLink>,
    
    <NavLink to="fixture" classAdd="responsive">
     <DateRangeTwoToneIcon/> Fixture
    </NavLink>,
    <NavLink classAdd="responsive" to="myStats">
     <QueryStatsTwoToneIcon/> {text.misEstadisticas}
    </NavLink>,
    <NavLink classAdd="responsive" to="history">
     <HistoryTwoToneIcon/> {text.historial}
    </NavLink>,
    <NavLink classAdd="responsive" to="teams/myTeam">
     <GroupsTwoToneIcon/> {text.equipos}
    </NavLink>,
    <NavLink classAdd="responsive" to="championships">
     <EmojiEventsTwoToneIcon/> {text.campeonatos}
    </NavLink>
  ];

  return (
    <div className="studentHome">
      <NavAfterLogin pages={pages} />
      <Outlet />
    </div>
  );
};

export default HomeStudent;
