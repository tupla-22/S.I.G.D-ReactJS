import UserAddDTForm from "./UserAddDTForm";
import UserAddJuzgeForm from "./UserAddJuzgeForm";
import UserAddStudentForm from "./UserAddStudentForm";

const UserAddTipeController = ({setPertenecenForm,pertenecenForm ,tipeUser,className, form,setForm}) => {
    
    
    
    
    
    switch(tipeUser){
        // case "admin":
        // return <UserAddAdminForm className={className}/>
        // break
        case 3:
        return <UserAddStudentForm setPertenecenForm={setPertenecenForm} pertenecenForm={pertenecenForm} form={form} setForm={setForm} className={className}/>
        break
    }
    
}
 
export default UserAddTipeController;