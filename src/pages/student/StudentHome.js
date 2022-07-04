import { Outlet } from "react-router-dom";
import StudentBar from "./componentes/StudentBar";

const StudentHome = () => {
    return ( 
        <div className="studentHome">
            <StudentBar/>
            <Outlet/>
        </div>
     );
}
 
export default StudentHome;