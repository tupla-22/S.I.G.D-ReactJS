import { Outlet } from "react-router-dom";
import { DivFondo } from "../../componentes/DivFondo";
import AdminUsersBar from "./componentes/AdminUsersBar";

const AdminUsers = () => {
  return (
    <DivFondo>
      <AdminUsersBar />
      <Outlet />
    </DivFondo>
  );
};

export default AdminUsers;
