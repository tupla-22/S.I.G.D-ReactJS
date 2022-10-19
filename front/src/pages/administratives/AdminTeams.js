import { Outlet } from "react-router-dom";
import AdminTeamsBar from "./componentes/AdminTeamsBar";

const AdminTeams = () => {
  return (
    <div>
      <AdminTeamsBar />
      <Outlet />
    </div>
  );
};

export default AdminTeams;
