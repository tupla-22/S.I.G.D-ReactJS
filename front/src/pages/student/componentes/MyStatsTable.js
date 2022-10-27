import { DivOver } from "../../../componentes/DivOver";
import { Table } from "../../../componentes/styledComponents/Table";
import { TH } from "../../../componentes/styledComponents/TH";
import MyStatsTableRow from "./MyStatsTableRow";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../../helpers/helpHttp";
import { getUser, urlApi } from "../../../functions/globals";


const peticion = helpHttp();
const user = getUser()


const MyStatsTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    peticion.get(urlApi(`statistics?id_usuario=${user.id_usuario}&tipo_estadistica=gol`)).then(result => {
      if (result.status = 200) {
        setData(result.result)
      }
    })
  }, []);
  return (
    <DivOver>
      <Table>
        <thead>
          <tr>
            <TH>Nombre</TH>
            <TH>Apellido</TH>
            <TH>PJ</TH>
            <TH>MJ</TH>
            <TH>PG</TH>
            <TH>PP</TH>
            <TH>PE</TH>
            <TH>PPP</TH>
          </tr>
        </thead>
        <tbody>
          {!data.is && <MyStatsTableRow data={data}/>}
        </tbody>
        
      </Table>
    </DivOver>
  );
};

export default MyStatsTable;
