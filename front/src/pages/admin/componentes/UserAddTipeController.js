import UserAddDTForm from "./UserAddDTForm";
import UserAddJuzgeForm from "./UserAddJuzgeForm";
import UserAddStudentForm from "./UserAddStudentForm";

const UserAddTipeController = ({tipeUser,className, userForm,setUserForm}) => {
    
    
    
    
    
    switch(tipeUser){
        // case "admin":
        // return <UserAddAdminForm className={className}/>
        // break
        case 3:
        return <UserAddStudentForm userForm={userForm} setUserForm={setUserForm} className={className}/>
        break
        // case "scout":
        // return <UserAddScoutForm className={className}/>
        // break
        case 8:
        return <UserAddDTForm userForm={userForm} setUserForm={setUserForm} className={className} />
        break
        // case "analist":
        // return <UserAddAnalistForm className={className}/>
        // break
        // case "administrative":
        // return <UserAddAdministrativeForm className={className}/>
        // break
        case 6:
        return <UserAddJuzgeForm userForm={userForm} setUserForm={setUserForm} className={className}/>
        break
    }
    
}
 
export default UserAddTipeController;