import UserAddAdminForm from "./UserAddAdminForm";
import UserAddAdministrativeForm from "./UserAddAdministrativeForm";
import UserAddAnalistForm from "./UserAddAnalistForm";
import UserAddDTForm from "./UserAddDTForm";
import UserAddJuzgeForm from "./UserAddJuzgeForm";
import UserAddScoutForm from "./UserAddScoutForm";
import UserAddStudentForm from "./UserAddStudentForm";

const UserAddTipeController = ({tipeUser,className, userForm,setUserForm}) => {
    
    
    
    
    
    switch(tipeUser){
        // case "admin":
        // return <UserAddAdminForm className={className}/>
        // break
        case "student":
        return <UserAddStudentForm userForm={userForm} setUserForm={setUserForm} className={className}/>
        break
        // case "scout":
        // return <UserAddScoutForm className={className}/>
        // break
        case "dt":
        return <UserAddDTForm userForm={userForm} setUserForm={setUserForm} className={className} />
        break
        // case "analist":
        // return <UserAddAnalistForm className={className}/>
        // break
        // case "administrative":
        // return <UserAddAdministrativeForm className={className}/>
        // break
        case "juzge":
        return <UserAddJuzgeForm userForm={userForm} setUserForm={setUserForm} className={className}/>
        break
    }
    
}
 
export default UserAddTipeController;