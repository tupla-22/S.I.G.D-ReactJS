import UserDelForm from "./UserDelForm";
import { useState } from "react";
import UserSearch from "./UserSearch";
import Main from "../../../componentes/styledComponents/Main";
import UserList from "./UserList";
const UserDelete = () => {
    const [idDel, setIdDel] = useState("");

    return ( 
        <>
         <Main>
           <UserDelForm></UserDelForm>
         </Main>
        </>
     );
}
 
export default UserDelete;