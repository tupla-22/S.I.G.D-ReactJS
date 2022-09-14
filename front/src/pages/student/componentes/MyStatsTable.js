import { DivOver } from "../../../componentes/DivOver";
import { Table } from "../../../componentes/styledComponents/Table";
import { TH } from "../../../componentes/styledComponents/TH";
import MyStatsTableRow from "./MyStatsTableRow";
import React, { useState, useEffect } from 'react';



const MyStatsTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://apirest.com/usuarios?select=*")
    .then(dat=>dat.json())
    .then((dat)=>{ setData({...data,...dat.result[0]}); });
    setData({...data,is:true})
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
