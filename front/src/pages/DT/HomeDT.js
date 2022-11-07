import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import Main from "../../componentes/styledComponents/Main";
import DTBar from "./componentes/DTBar";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import LanguajeContext from "../../contexts/LanguajeContext";
import { useContext } from "react";

const HomeDT = () => {

  const { text } = useContext(LanguajeContext);

  const pages = [
    <NavLink to="home" classAdd="responsive">
     <HomeTwoToneIcon/> {text.inicio}
    </NavLink>,
    <NavLink to="myteams" classAdd="responsive">
      <GroupsTwoToneIcon/>{text.misEquipos}
    </NavLink>,
    <NavLink to="adminTeams/add" classAdd="responsive">
     <GroupsTwoToneIcon/> {text.equipos}
    </NavLink>,
    <NavLink to="championshipsLoad/add" classAdd="responsive">
    <EmojiEventsTwoToneIcon/>  {text.campeonatos}
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
