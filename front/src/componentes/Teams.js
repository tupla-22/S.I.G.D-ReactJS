import { Outlet } from "react-router-dom";
import EquiposBar from "../pages/student/componentes/EquiposBar";

const Teams = () => {
  return (
    <>
      <EquiposBar></EquiposBar>
      <Outlet />
    </>
  );
};

export default Teams;
