import { TD } from "../../../componentes/styledComponents/TD";
import { dateTradeEs } from "../../../functions/globals";

const ChampionshipListRow = ({data}) => {
    console.log(dateTradeEs(data.fechaInicio_campeonato))
    return (  
        <tr>
            <TD>{data.nombre_campeonato}</TD>
            <TD>{dateTradeEs(data.fechaInicio_campeonato)}</TD>
            <TD>{dateTradeEs(data.fechaFin_campeonato)}</TD>
            <TD>{data.id_campeonato}</TD>
        </tr>
    );
}
 
export default ChampionshipListRow;