import { Outlet } from "react-router-dom";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import NavLink from "../../componentes/NavLink";
import Main from "../../componentes/styledComponents/Main";
import AdminNav from "./componentes/AdminNav";
import { useContext } from "react";
import LanguajeContext from "../../contexts/LanguajeContext";

const AdminChampionships = () => { 

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
          <Outlet></Outlet>
        </Main>
    </>
  );
};

export default AdminChampionships;
