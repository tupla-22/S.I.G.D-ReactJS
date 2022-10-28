import { Outlet, useNavigate } from "react-router-dom";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import NavLink from "../../componentes/NavLink";
import AdminNav from "./componentes/AdminNav";
import AdminUsersBar from "./componentes/AdminUsersBar";
import LanguajeContext from "../../contexts/LanguajeContext";
import { useContext } from "react";
import React, { useState, useEffect } from 'react';


const AdminUsers = () => {

  
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

export default AdminUsers;
