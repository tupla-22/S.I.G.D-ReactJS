import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Link from "./Link";
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { useContext } from "react";
import LanguajeContext from "../contexts/LanguajeContext";

const BtnLogOut = () => {

    const {text} = useContext(LanguajeContext)

    const navigate = useNavigate();
    const handleOut = () =>{
        localStorage.clear();
    }

    return ( 
        <Link to="/" className={"NavLink"} onClick={handleOut}>{<LogoutTwoToneIcon />}{ text.salir}</Link>
     );
}
 
export default BtnLogOut;