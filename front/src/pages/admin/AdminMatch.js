import { Outlet } from "react-router-dom";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import NavLink from "../../componentes/NavLink";
import Main from "../../componentes/styledComponents/Main";
import AdminNav from "./componentes/AdminNav";
import LanguajeContext from "../../contexts/LanguajeContext";
import { useContext } from "react";

const AdminMatch = () => {
  
  const { text } = useContext(LanguajeContext)
  

  const pages = [
    <NavLink to="add">{text.agregar}</NavLink>,
    <NavLink to="delete">{text.eliminar }</NavLink>,
    <NavLink to="update">{ text.actualizar}</NavLink>,
  ];
  

  return (
    <>
      <AdminNav pages={pages}></AdminNav>

        <Main>
          <Outlet />
        </Main>
    </>
  );
};

export default AdminMatch;
