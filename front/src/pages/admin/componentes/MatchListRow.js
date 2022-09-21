import { TD } from "../../../componentes/styledComponents/TD";

const MatchListRow = ({data}) => {
    
    return (  
        <tr>
            <TD>{data.nombre_campeonato}</TD>
            <TD>{data.id_campeonato}</TD>
        </tr>
    );
}
 
export default MatchListRow;