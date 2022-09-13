import {Link as LinkRR} from "react-router-dom"
import "./styles/Link.css"

const Link = ({to,children,className,onClick}) => {
    return ( 
        <LinkRR onClick={onClick} className={`Link ${className}`} to={to}>{children}</LinkRR>
     );
}
 
export default Link;