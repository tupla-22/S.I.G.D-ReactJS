import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Link from "./Link";
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

const BtnLogOut = () => {
    const navigate = useNavigate();
    const handleOut = () =>{
        localStorage.clear();
    }

    return ( 
        <Link to="/" className={"NavLink"} onClick={handleOut}>{<LogoutTwoToneIcon/>}Salir</Link>
     );
}
 
export default BtnLogOut;