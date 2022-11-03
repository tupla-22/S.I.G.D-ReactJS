import { DivOver } from "../../../componentes/DivOver";
import { TH } from "../../../componentes/styledComponents/TH";
import TeamsListRow from "./TeamsListRow";
import React, { useState, useEffect, useContext } from "react";
import { Table } from "../../../componentes/styledComponents/Table";
import { getUser, urlApi } from "../../../functions/globals";
import { helpHttp } from "../../../helpers/helpHttp";
import LanguajeContext from "../../../contexts/LanguajeContext";

const peticion= helpHttp();

const TeamsList = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  const {text} = useContext(LanguajeContext)
  const user = getUser()

  useEffect(() => {
    let url =""

    if (user.id_rol_usuario == 6) {
          url=`equipos?select=*&linkTo=visible_equipo${user.id_rol_usuario==6 && ",id_usuario_equipo"}&equalTo=1¨¨${user.id_rol_usuario==6 && user.id_usuario}`
    } else{
          url=`equipos?select=*&linkTo=visible_equipo&equalTo=1`
        }


        peticion.get(urlApi(url)).then((dat) => {
          console.log(dat)
          if(dat.status==200){
            setData(dat.result);
            setStatus(true);

          }
        })
  }, []);

  return (
    <>
      <h3>{text.equipos}</h3>
      <DivOver>
        <Table>
          <thead>
            <TH>{text.escudo}</TH>
            <TH>{text.nombre}</TH>
            <TH>{text.deporte}</TH>
            <TH>ID</TH>
          </thead>

          <tbody>{status && data.map((e) => <TeamsListRow key={e.id_equipo+"equipo"} data={e} />)}</tbody>
        </Table>
      </DivOver>
    </>
  );
};

export default TeamsList;
