import { helpHttp } from "../helpers/helpHttp";
import TablePlayersRow from "./TablePlayersRow";
import React, { useState, useEffect } from 'react';
import { getUser, urlApi } from "../functions/globals";

const peticion=helpHttp();

const user = getUser();

const TablePlayers = () => {

    const [myTeam, setMyTeam] = useState({});

    const sx = {
        padding:"10px",
        border:"1px solid #0005",
        borderRadius:"5px"
    }

    useEffect(() => {
        peticion.get(urlApi(`relations?select=primerNombre_usuario,nombre_rol&rel=usuarios,roles&type=usuario,rol&orderBy=id_rol&orderMode=asc&startAt=0&endAt=2`)).then(e=>console.log(e))
    }, []);

    return ( 
        <table>
            <thead>
                <tr >
                    <th style={sx}>Jugadores</th>
                    <th style={sx}>Edad</th>
                    <th style={sx}>Goles</th>
                </tr>
            </thead>
            <tbody>
                <TablePlayersRow data/> 
            </tbody>
        </table>
     );
}
 
export default TablePlayers;