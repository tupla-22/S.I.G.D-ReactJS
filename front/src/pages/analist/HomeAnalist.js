import { Outlet } from "react-router-dom";
import NavAfterLogin from "../../componentes/NavAfterLogin";
import NavLink from "../../componentes/NavLink";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import Main from "../../componentes/styledComponents/Main";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ManageSearchTwoToneIcon from '@mui/icons-material/ManageSearchTwoTone';

const HomeAnalist = () => {
  const pages = [
    <NavLink to="home" classAdd="responsive">
     <HomeTwoToneIcon/> Home
    </NavLink>,
    <NavLink to="matchManagment" classAdd="responsive">
    <ManageSearchTwoToneIcon/>  Gestionar partido
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
