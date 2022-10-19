import { Outlet } from "react-router-dom";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import NavLink from "../../componentes/NavLink";
import AdminNav from "./componentes/AdminNav";
import AdminUsersBar from "./componentes/AdminUsersBar";

const AdminUsers = () => {
    const pages = [
        
    <NavLink to="add">Agregar</NavLink>,
    <NavLink to="delete">Eliminar</NavLink>,
    <NavLink to="update">Actualizar</NavLink>,
    ]
  return (
    <DivFondo>
        <AdminNav pages={pages}/>
      <Outlet />
    </DivFondo>
  );
};

export default AdminUsers;
