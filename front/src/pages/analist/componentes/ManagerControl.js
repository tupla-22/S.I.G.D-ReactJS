import ManagmentBasketballControler from "./ManagmentBasketballControler";
import ManagmentFootballControler from "./ManagmentFootballControler";
import ManagmentHandballControler from "./ManagmentHandballControler";

const ManagerControl = ({sport,locales,visitantes}) => {
    
    switch (sport) {
        case "football":
            return <ManagmentFootballControler locales={locales}  visitantes={visitantes}/>
            break;
        case "basketball":
            return <ManagmentBasketballControler locales={locales} visitantes={visitantes}/>
            break;
        case "handball":
            return <ManagmentHandballControler locales={locales}  visitantes={visitantes}/>
            break;
    
        default:
            break;
    }
}
 
export default ManagerControl;