import { Outlet } from "react-router-dom";
import FormLogin from "../componentes/FormLogin";
import Bar from "./componentes/Bar";
import Main from "../componentes/Main";
import "./Home.css"
const Home = () => {
    return ( 
        <div className="home">
            <Bar/>
            <Outlet/>
        </div>
     );
}
 
export default Home;