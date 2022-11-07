import { DivOver } from "../../../componentes/DivOver";
import { Table } from "../../../componentes/styledComponents/Table";
import { TH } from "../../../componentes/styledComponents/TH";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../../helpers/helpHttp";
import { getUser, urlApi } from "../../../functions/globals";
import PlayerCard from "../../../componentes/PlayerModal.js";
import { H3B } from "../../../componentes/styledComponents/ComponentesDeEstilos";
import PlayerCardOnly from "../../../componentes/PlayerCardOnly";
import { useContext } from "react";
import LanguajeContext from "../../../contexts/LanguajeContext";


const peticion = helpHttp();
const user = getUser()

const MyStatsTable = () => {
  const [data, setData] = useState({});
  
const {text} = useContext(LanguajeContext)

  return (
    <>
      <H3B>{text.a23fer}</H3B>
      <PlayerCardOnly idUsuario={user.id_usuario}/>
    </>
  );
};

export default MyStatsTable;
