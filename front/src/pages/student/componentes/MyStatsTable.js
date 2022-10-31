import { DivOver } from "../../../componentes/DivOver";
import { Table } from "../../../componentes/styledComponents/Table";
import { TH } from "../../../componentes/styledComponents/TH";
import MyStatsTableRow from "./MyStatsTableRow";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../../helpers/helpHttp";
import { getUser, urlApi } from "../../../functions/globals";
import PlayerCard from "../../../componentes/PlayerCard";
import { H3B } from "../../../componentes/styledComponents/ComponentesDeEstilos";


const peticion = helpHttp();
const user = getUser()


const MyStatsTable = () => {
  const [data, setData] = useState({});

  return (
    <>
      <H3B>Precionando en el icono puedes observar tus estadisticas y datos como los ven el reclutador</H3B>
      <PlayerCard idUsuario={user.id_usuario}/>
    </>
  );
};

export default MyStatsTable;
