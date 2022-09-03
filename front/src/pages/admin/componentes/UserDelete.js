import UserDelForm from "./UserDelForm";
import { useState } from "react";
import UserSearch from "./UserSearch";
import Main from "../../../componentes/Main";
import UserList from "./UserList";
const UserDelete = () => {
    const [idDel, setIdDel] = useState("");

    return ( 
        <>
         <Main>
           <UserDelForm></UserDelForm>
           <UserSearch></UserSearch>
            <UserList/>
         </Main>
        </>
     );
}
 
export default UserDelete;