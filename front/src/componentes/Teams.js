import { Outlet } from "react-router-dom";
import EquiposBar from "../pages/student/componentes/EquiposBar";

const Teams = () => {
  return (
    <>
      <EquiposBar />

      <Outlet />
    </>
  );
};

export default Teams;
