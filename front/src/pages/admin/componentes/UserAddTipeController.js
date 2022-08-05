import UserAddAdminForm from "./UserAddAdminForm";
import UserAddAdministrativeForm from "./UserAddAdministrativeForm";
import UserAddAnalistForm from "./UserAddAnalistForm";
import UserAddDTForm from "./UserAddDTForm";
import UserAddJuzgeForm from "./UserAddJuzgeForm";
import UserAddScoutForm from "./UserAddScoutForm";
import UserAddStudentForm from "./UserAddStudentForm";

const UserAddTipeController = ({tipeUser}) => {
    
    
    
    
    
    switch(tipeUser){
        case "admin":
        return <UserAddAdminForm/>
        break
        case "student":
        return <UserAddStudentForm/>
        break
        case "scout":
        return <UserAddScoutForm/>
        break
        case "dt":
        return <UserAddDTForm/>
        break
        case "analist":
        return <UserAddAnalistForm/>
        break
        case "administrative":
        return <UserAddAdministrativeForm/>
        break
        case "juzge":
        return <UserAddJuzgeForm/>
        break
    }
    
}
 
export default UserAddTipeController;