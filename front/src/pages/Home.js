import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import Link from "../componentes/Link";
import NavAfterLogin from "../componentes/NavAfterLogin";
import NavLink from "../componentes/NavLink";
import Bar from "./componentes/Bar";
import "./Home.css"
const Home = () => {

    const pages= [<NavLink classAdd="responsive" to="/">Luasdf</NavLink>,"asdfasdf"]
    const settings =[<NavLink classAdd="responsive" to="/">Luasdf</NavLink>,"asdfasdf"]


    return ( 
        <div className="home">
            <Bar/>
            <Outlet/>
        </div>
     );
}
 
export default Home;