import TeamsList from "../pages/admin/componentes/TeamsList";
import AllTeamsTable from "./AllTeamsTable";
import { H3B } from "./styledComponents/ComponentesDeEstilos";
import { H3 } from "./styledComponents/H3";
import Main from "./styledComponents/Main";

const AllTeams = () => {
    const sx = {
        padding:"10px",
        border:"1px solid #0005",
        borderRadius:"5px"
    }

    return ( 
        <Main>  
            <H3B>Todos los equipos</H3B>
                <TeamsList/>
        </Main>
     );
}
 
export default AllTeams;