import { Outlet } from "react-router-dom";
import { DivFondo } from "../../componentes/DivFondo";
import AdminTeamsBar from "./componentes/AdminTeamsBar";

const AdminTeams = () => {
  return (
    <div>
      <AdminTeamsBar />
      <DivFondo>
        <Outlet />
      </DivFondo>
    </div>
  );
};

export default AdminTeams;
