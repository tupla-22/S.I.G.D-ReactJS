import { Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DropButton = ({children}) => {
    const sx={
        display:"flex"
    }
    return ( 
        
        <div style={sx}>{children}<ExpandMoreIcon/></div>

        

     );
}
 
export default DropButton;