import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Link from "./Link";


const BtnLogOut = () => {
    const navigate = useNavigate();
    const handleOut = () =>{
        localStorage.clear();
    }

    return ( 
        <Link classAdd="responsive" to="/" onClick={handleOut}>Salir</Link>
     );
}
 
export default BtnLogOut;