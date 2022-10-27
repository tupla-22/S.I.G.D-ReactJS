import { EscudoList } from "../../../componentes/styledComponents/EscudoList";
import { TD } from "../../../componentes/styledComponents/TD";
import { dateTradeEs, getUser } from "../../../functions/globals";
import React, { useState, useEffect } from 'react';


const MatchListRow = ({data}) => {
    const [admin, setAdmin] = useState(false);

    const user = getUser()

    useEffect(() => {
        if(user.id_rol_usuario == 1 ||  user.id_rol_usuario == 2)  {
            setAdmin(true)
        }
       
    }, []);
    return (  
        <tr>
            <TD>{dateTradeEs(data.dia_partido)}</TD>
            <TD>{data.hora_partido}</TD>
            <TD>{data.nombre_equipoLocal}<br/><EscudoList src={data.escudo_equipoLocal}></EscudoList></TD>
            <TD>VS</TD>
            <TD>{data.nombre_equipoVisitante}<br/><EscudoList src={data.escudo_equipoVisitante}/></TD>
            <TD>{data.tipo_partido}</TD>
            {admin && <TD>ID: {data.id_partido}</TD>}
        </tr>
    );
}
 
export default MatchListRow;