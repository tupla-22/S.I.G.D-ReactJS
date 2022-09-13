import { TD } from "../../../componentes/styledComponents/TD";

const TeamsListRow = ({data}) => {
    
    return (  
        <tr>
            <TD><img style={{height:"25px"}} src={`${data.escudo_equipo}`}></img></TD>
            <TD>{data.nombre_equipo}</TD>
            <TD>{data.id_equipo}</TD>
        </tr>
    );
}
 
export default TeamsListRow;