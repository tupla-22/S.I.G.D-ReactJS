import { NavLink as NavLinkRR } from "react-router-dom";


const NavLink = ({to,classAdd,nombre}) => {


    return ( 
        <NavLinkRR to={to} style={({isActive}) => isActive ? "isActive "+classAdd : " "+classAdd}>{nombre}</NavLinkRR>
     );
}
 
export default NavLink;