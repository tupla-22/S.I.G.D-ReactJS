
import { DivOver } from "../../../componentes/DivOver";
import { TH } from "../../../componentes/styledComponents/TH";
import TeamsListRow from "./TeamsListRow";
import React, { useState, useEffect } from 'react';
import { Table } from "../../../componentes/styledComponents/Table";

const TeamsList = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false);
  
    useEffect(() => {
    const pedirData = async ()=>{
        await fetch("http://apirest.com/equipos?select=*")
          .then((res) => res.json())
          .then((dat) => {
            setData(dat.result);
            setStatus(true);
          })
          .catch((e) => {
            console.log(e);
          });
          console.log(data)
    }
    pedirData();

    
    }, []);



  return (
    
    <>
      <h3>Equipos</h3>
    <DivOver>
      <Table>
        <thead>
          <TH>Escudo</TH>
          <TH>Nombre</TH>
          <TH>ID</TH>
        </thead>

        <tbody>{status && data.map((e) => <TeamsListRow data={e} />)}</tbody>
      </Table>
    </DivOver>

    </>
  );
};

export default TeamsList;
