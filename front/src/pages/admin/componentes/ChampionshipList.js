import { DivOver } from "../../../componentes/DivOver";
import { TH } from "../../../componentes/styledComponents/TH";
import React, { useState, useEffect } from "react";
import { Table } from "../../../componentes/styledComponents/Table";
import ChampionshipListRow from "./ChampionshipListRow";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";

const ChampionshipList = () => {
  const [data, setData] = useState([]);

  const peticion = helpHttp();


  useEffect(() => {
    peticion.get(urlApi("campeonatos?select=*")).then(e=>setData(e.result))
  }, []);

  return (
    <>
      <h3>Campeonatos</h3>
      <DivOver>
        <Table>
          <thead>
            <tr>
              <TH>Nombre</TH>
              <TH>ID</TH>
            </tr>
          </thead>
          <tbody>
              {data.map((e, i) => (<ChampionshipListRow key={"champ" + i} data={e} />))}
          </tbody>
        </Table>
      </DivOver>
    </>
  );
};

export default ChampionshipList;
