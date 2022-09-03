import { Outlet } from "react-router-dom";
import DTBar from "./componentes/DTBar";

const HomeDT = () => {
    return ( 
        <>
            <DTBar></DTBar>
            <Outlet></Outlet>
        </>
     );
}
 
export default HomeDT;