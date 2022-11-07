import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AdminNav from '../../admin/componentes/AdminNav';
import NavLink from '../../../componentes/NavLink';
import { useContext } from 'react';
import LanguajeContext from '../../../contexts/LanguajeContext';

export default function EquiposBar() {

  const {text} = useContext(LanguajeContext)

  const pages = [
    <NavLink to={"myTeam"}>
      {text.misEquipos}
    </NavLink>,
    <NavLink to={"teamsAll"}>
      {text.todosLosEquipos}
    </NavLink>
  ]


  const navigate = useNavigate();


  return (

    <AdminNav pages={pages}>

    </AdminNav>
  );
}
