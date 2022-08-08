import UserDelForm from "./UserDelForm";
import { useState } from "react";
import UserSearch from "./UserSearch";
const UserDelete = () => {
    const [idDel, setIdDel] = useState("");

    return ( 
        <>

           <UserDelForm></UserDelForm>
           <UserSearch></UserSearch>
        </>
     );
}
 
export default UserDelete;