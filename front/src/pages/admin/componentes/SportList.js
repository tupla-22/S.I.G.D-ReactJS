import { DivOver } from "../../../componentes/DivOver";
import { TH } from "../../../componentes/styledComponents/TH";
import TeamsListRow from "./TeamsListRow";
import React, { useState, useEffect, useContext } from "react";
import { Table } from "../../../componentes/styledComponents/Table";
import { urlApi } from "../../../functions/globals";
import { helpHttp } from "../../../helpers/helpHttp";
import LanguajeContext from "../../../contexts/LanguajeContext";
import SportListRow from "./SportListRow";

const peticion= helpHttp();

const  SportList = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  const {text} = useContext(LanguajeContext)

  useEffect(() => {
        peticion.get(urlApi(`deportes?select=*`)).then((dat) => {
          if(dat.status==200){
            setData(dat.result);
            setStatus(true);

          }
        })
  }, []);

  return (
    <>
      <h3>{text.deportes}</h3>
      <DivOver>
        <Table>
          <thead>
            <TH>{text.imagen}</TH>
            <TH>{text.nombre}</TH>
          </thead>

          <tbody>{status && data.map((e) => <SportListRow key={e.id_equipo+"equipo"} data={e} />)}</tbody>
        </Table>
      </DivOver>
    </>
  );
};

export default SportList;
