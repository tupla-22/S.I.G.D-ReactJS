import Main from "../../../componentes/styledComponents/Main";
import MatchList from "../../admin/componentes/MatchList";

const History = () => {
    return ( 
        <Main>
            <h2>Historial</h2>
            <MatchList sport={"all"} disputed={1}></MatchList>
            
        </Main>
     );
}
 
export default History;