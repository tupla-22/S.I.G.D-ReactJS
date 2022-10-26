import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import Main from "../../componentes/styledComponents/Main";
import DTBar from "./componentes/DTBar";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';

const HomeDT = () => {
  const pages = [
    <NavLink to="home" classAdd="responsive">
     <HomeTwoToneIcon/> Home
    </NavLink>,
    <NavLink to="myteams" classAdd="responsive">
      <GroupsTwoToneIcon/>Mis equipos
    </NavLink>,
    <NavLink to="adminTeams/add" classAdd="responsive">
     <GroupsTwoToneIcon/> Equipos
    </NavLink>,
    <NavLink to="championshipsLoad/add" classAdd="responsive">
    <EmojiEventsTwoToneIcon/>  Campeonatos
    </NavLink>,
  ];
  return (
    <>
      <NavAfterLogin pages={pages} />
        <Outlet></Outlet>
    </>
  );
};

export default HomeDT;
