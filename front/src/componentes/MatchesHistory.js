import Main from "./styledComponents/Main";
import MatchesHistoryTable from "./MatchesHistoryTable";
import { P } from "./styledComponents/P";

const MatchesHistory = () => {
    return ( 
        <Main>
            <MatchesHistoryTable/>
            <P>PJ: Partidos jugados <br/>PG: Partidos ganados <br/>PP: Partidos perdidos<br/>PE: Partidos empatados</P>
        </Main>
     );
}
 
export default MatchesHistory;