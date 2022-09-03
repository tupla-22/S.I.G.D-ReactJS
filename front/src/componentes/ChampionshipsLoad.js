import { Outlet } from "react-router-dom";
import ChampionshipsLoadBar from "./ChampionshipsLoadBar";

const ChampionshipsLoad = () => {
    return ( 
        <>
        <ChampionshipsLoadBar/>
        <Outlet/>
        
        
        </>

     );
}
 
export default ChampionshipsLoad;