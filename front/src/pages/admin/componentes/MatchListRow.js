import { TD } from "../../../componentes/styledComponents/TD";

const MatchListRow = ({data}) => {
    
    return (  
        <tr>
            <TD>{data.fecha_partido}</TD>
            <TD></TD>
            <TD>{data.id_equipoLocal_partido}</TD>
            <TD>{}</TD>
            <TD>{data.id_equipoVisitante_partido}</TD>
        </tr>
    );
}
 
export default MatchListRow;