import ManagmentBasketballControler from "./ManagmentBasketballControler";
import ManagmentFootballControler from "./ManagmentFootballControler";
import ManagmentHandballControler from "./ManagmentHandballControler";

const ManagerControl = ({matchId,sport,locales,visitantes}) => {
    
    switch (sport) {
        case "football":
            return <ManagmentFootballControler matchId={matchId} locales={locales}  visitantes={visitantes}/>
            break;
        case "basketball":
            return <ManagmentBasketballControler matchId={matchId} locales={locales} visitantes={visitantes}/>
            break;
        case "handball":
            return <ManagmentHandballControler matchId={matchId} locales={locales}  visitantes={visitantes}/>
            break;
    
        default:
            break;
    }
}
 
export default ManagerControl;