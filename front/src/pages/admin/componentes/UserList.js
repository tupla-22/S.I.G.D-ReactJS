import React, { useState, useEffect } from "react";
import { DivOver } from "../../../componentes/DivOver";
import { Table } from "../../../componentes/Table";
import { TH } from "../../../componentes/TH";
import UserListRow from "./UserListRow";

const UserList = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetch("http://apirest.com/usuarios?select=*")
      .then((res) => res.json())
      .then((dat) => {
        setData(dat.result);
        setStatus(true)
      })
      .catch((e) => {
        console.log(e);
      });
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
        </thead>

        <tbody>
            {status &&  data.map(e=>(<UserListRow data={e}/>))
            }

        </tbody>
      </Table>
    </DivOver>
    </>
  );
};

export default UserList;
