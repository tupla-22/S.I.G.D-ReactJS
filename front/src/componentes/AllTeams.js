import AllTeamsTable from "./AllTeamsTable";
import Main from "./Main";

const AllTeams = () => {
    const sx = {
        padding:"10px",
        border:"1px solid #0005",
        borderRadius:"5px"
    }

    return ( 
        <Main>  
            <h3 style={{padding:20}}>Todos los equipos</h3>

                <AllTeamsTable/>
        </Main>
     );
}
 
export default AllTeams;