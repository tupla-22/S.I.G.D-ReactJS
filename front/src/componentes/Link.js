import {Link as LinkRR} from "react-router-dom"
import "./styles/Link.css"

const Link = ({to,children,className}) => {
    return ( 
        <LinkRR className={`Link ${className}`} to={to}>{children}</LinkRR>
     );
}
 
export default Link;