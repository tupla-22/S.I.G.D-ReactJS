import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { BoxFlex } from "../../../componentes/BoxFlex";
import Form from "../../../componentes/Form";
import { PAlert } from "../../../componentes/PAlert";
import { GridContained } from "../../../componentes/styledComponents/GridContained";
import { urlApi } from "../../../functions/globals";
import { helpHttp } from "../../../helpers/helpHttp";

const peticion = helpHttp();

const UserListButtons = ({ locales, visitantes,name,onClick }) => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log(visitantes, locales,name);
    peticion
      .get(
        urlApi(
          `usuarios?select=primerNombre_usuario&linkTo=id_rol_usuario&equalTo=3`
        )
      )
      .then((e) => {
        if (!e.status == 200) setErrors(true);
        setUsers(e.result);
      });
  }, [user]);

  return (
    <BoxFlex>
      <GridContained>
        <h4>Equipo Local</h4>
        {locales.map((e) => (
          <Button onClick={()=>
            {
                setUser(e)
            }} key={e.ci_usuario}>{e.primerNombre_usuario}</Button>
        ))}
      </GridContained>
      <GridContained>
        <h4>Equipo visitante</h4>
        {visitantes.map((e) => (
          <Button onClick={()=>
            {
                setUser(e)
             }} key={e.ci_usuario}>{e.primerNombre_usuario}</Button>
        ))}
      </GridContained>
    </BoxFlex>
  );
};

export default UserListButtons;
