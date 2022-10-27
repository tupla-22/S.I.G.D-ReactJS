import { Outlet } from "react-router-dom";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import NavLink from "../../componentes/NavLink";
import AdminNav from "./componentes/AdminNav";
import AdminTeamsBar from "./componentes/AdminTeamsBar";
import { getUser } from "../../functions/globals";
import { useContext } from "react";
import LanguajeContext from "../../contexts/LanguajeContext";

const user= getUser()

const AdminTeams = () => {

  
  const { text } = useContext(LanguajeContext)
  

  const pages = [
    <NavLink to="add">{text.agregar}</NavLink>,
    <NavLink to="delete">{text.eliminar }</NavLink>,
    <NavLink to="update">{ text.actualizar}</NavLink>,
  ];
  return (
    <>
    
        <AdminNav pages={pages}/>
        <Outlet />
    
    
    
    </>
  );
};

export default AdminTeams;
