import ManagmentBasketballControler from "./ManagmentBasketballControler";
import ManagmentFootballControler from "./ManagmentFootballControler";
import ManagmentHandballControler from "./ManagmentHandballControler";

const ManagerControl = ({confirm,  endMatch,matchId,sport,locales,visitantes}) => {
    
    switch (sport) {
        case "football":
            return <ManagmentFootballControler confirm={confirm} endMatch={endMatch} matchId={matchId} locales={locales}  visitantes={visitantes}/>
            break;
        case "basketball":
            return <ManagmentBasketballControler confirm={confirm} matchId={matchId} locales={locales} visitantes={visitantes}/>
            break;
        case "handball":
            return <ManagmentHandballControler matchId={matchId} locales={locales}  visitantes={visitantes}/>
            break;
    
        default:
            break;
    }
}
 
export default ManagerControl;