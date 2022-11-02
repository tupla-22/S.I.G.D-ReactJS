import { TD } from "../../../componentes/styledComponents/TD";

const SportListRow = ({data}) => {
    
    return (  
        <tr>
            <TD><img alt="Imagen del deporte" style={{height:"25px"}} src={`${data.escudo_equipo}`}></img></TD>
            <TD>{data.id_deporte}</TD>
        </tr>
    );
}
 
export default SportListRow;