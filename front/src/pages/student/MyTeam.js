import DropButton from "../../componentes/DropButton";
import Main from "../../componentes/styledComponents/Main";
import TablePlayers from "../../componentes/TablePlayers";

const MyTeam = () => {
    return ( 
    
    <Main>
        <h3 style={{padding:20}}>Equipo: (nombre)</h3>
        <TablePlayers/>
    </Main>
     );
}
 
export default MyTeam;