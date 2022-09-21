import { DivOver } from "../../../componentes/DivOver";
import { TH } from "../../../componentes/styledComponents/TH";
import React, { useState, useEffect } from "react";
import { Table } from "../../../componentes/styledComponents/Table";
import ChampionshipListRow from "./ChampionshipListRow";

const ChampionshipList = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const pedirData = async () => {
      await fetch("http://apirest.com/usuarios?select=*")
        .then((res) => res.json())
        .then((dat) => {
          setData(dat.result);
          setStatus(true);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    pedirData();
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
            {status &&
              data.map((e, i) => (
                <ChampionshipListRow key={"champ" + i} data={e} />
              ))}
          </tbody>
        </Table>
      </DivOver>
    </>
  );
};

export default ChampionshipList;
