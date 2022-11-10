import { DivOver } from "../../../componentes/DivOver";
import { TH } from "../../../componentes/styledComponents/TH";
import TeamsListRow from "./TeamsListRow";
import React, { useState, useEffect, useContext } from "react";
import { Table } from "../../../componentes/styledComponents/Table";
import { getUser, urlApi } from "../../../functions/globals";
import { helpHttp } from "../../../helpers/helpHttp";
import LanguajeContext from "../../../contexts/LanguajeContext";

const peticion= helpHttp();

const TeamsList = ({teamName}) => {
  const [equipos, setEquipos] = useState([]);
  const [status, setStatus] = useState(false)
  const { text } = useContext(LanguajeContext)
  const [url, setUrl] = useState("");
  const user = getUser()

  useEffect(() => {
    


    if (user.id_rol_usuario == 6) {
          setUrl(`equipos?select=*&linkTo=visible_equipo${user.id_rol_usuario==6 && ",id_usuario_equipo"}&equalTo=1¨¨${user.id_rol_usuario==6 && user.id_usuario}`)
    } else{
          setUrl(`equipos?select=*&linkTo=visible_equipo&equalTo=1`)
        }
    
  }, []);

  useEffect(() => {
    peticion.get(urlApi(url)).then((dat) => {
      console.log(dat)
      if(dat.status==200){
        setEquipos(dat.result);
        setStatus(true);

      }
    })
  }, [url]);

  useEffect(() => {
    if (teamName != undefined && teamName!="") {
      setUrl(`equipos?select=*&linkTo=nombre_equipo,visible_equipo&search=${teamName}¨¨1`)
    }

  }, [teamName]);
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

          <tbody>{status && equipos.map((e) => <TeamsListRow equipos={equipos} setEquipos={setEquipos} key={e.id_equipo+"equipo"} equipo={e} />)}</tbody>
        </Table>
      </DivOver>
    </>
  );
};

export default TeamsList;
