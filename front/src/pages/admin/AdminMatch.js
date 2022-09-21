import { Outlet } from "react-router-dom";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import NavLink from "../../componentes/NavLink";
import Main from "../../componentes/styledComponents/Main";
import AdminNav from "./componentes/AdminNav";

const AdminMatch = () => {
  const pages = [
    <NavLink to="add">Agregar</NavLink>,
    <NavLink to="delete">Eliminar</NavLink>,
    <NavLink to="update">Actualizar</NavLink>,
  ];
  

  return (
    <>
      <AdminNav pages={pages}></AdminNav>

      <DivFondo>
        <Main>
          <Outlet />
        </Main>
      </DivFondo>
    </>
  );
};

export default AdminMatch;
