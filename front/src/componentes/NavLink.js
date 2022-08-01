import { NavLink as NavLinkRR } from "react-router-dom";
import "./styles/NavLink.css";

const NavLink = ({to,classAdd,children}) => {


    return ( 
        <NavLinkRR to={to} className={({isActive}) => isActive ? `isActive ${classAdd}` : `noActive ${classAdd}`}>{children}</NavLinkRR>
     );
}
 
export default NavLink;