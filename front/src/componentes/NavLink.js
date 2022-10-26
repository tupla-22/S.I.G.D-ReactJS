import { NavLink as NavLinkRR } from "react-router-dom";
import "./styles/NavLink.css";

const NavLink = ({to,classAdd,children}) => {


    return ( 
        <NavLinkRR to={to} className={({isActive}) => isActive ? `isActive NavLink ${classAdd}` : `noActive NavLink ${classAdd}`}>{children}</NavLinkRR>
     );
}
 
export default NavLink;