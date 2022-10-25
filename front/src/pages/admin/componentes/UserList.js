import React, { useState, useEffect } from "react";
import { DivOver } from "../../../componentes/DivOver";
import { Table } from "../../../componentes/styledComponents/Table";
import { TH } from "../../../componentes/styledComponents/TH";
import { urlApi, userVerifier } from "../../../functions/globals";
import { helpHttp } from "../../../helpers/helpHttp";
import UserListRow from "./UserListRow";
import SettingsIcon from '@mui/icons-material/Settings';

import { unstable_detectScrollType } from "@mui/utils";


const UserList = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [userType, setUserType] = useState({});
  const peticion = helpHttp();

  useEffect(() => {
    peticion.get(urlApi("usuarios?select=*")).then(dat=>{
      setData(dat.result)
      setStatus(true);
    })
    userVerifier(setUserType,userType)
  }, []);

  return (
    <>
      <h3>Usuarios</h3>
      <DivOver>
        <Table>
          <thead>
            <TH>Nombre</TH>
            <TH>Apellido</TH>
            <TH>Cedula de identidad</TH>
            <TH>Email</TH>
            <TH>Fecha de nacimiento</TH>
            <TH>Rol</TH>
          </thead>

          <tbody>{status && data.map((e) => <UserListRow key={e.ci_usuario} data={e} />)}</tbody>
        </Table>
      </DivOver>
    </>
  );
};

export default UserList;
