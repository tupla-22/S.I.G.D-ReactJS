import { Outlet } from "react-router-dom";
import StudentBar from "./componentes/StudentBar";

const HomeStudent = () => {
    return ( 
        <div className="studentHome">
            <StudentBar/>
            <Outlet/>
        </div>
     );
}
 
export default HomeStudent;