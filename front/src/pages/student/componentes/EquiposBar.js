import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
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
