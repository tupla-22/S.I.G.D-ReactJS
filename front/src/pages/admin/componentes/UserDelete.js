import UserDelForm from "./UserDelForm";
import { useState } from "react";
import UserSearch from "./UserSearch";
import Main from "../../../componentes/Main";
const UserDelete = () => {
    const [idDel, setIdDel] = useState("");

    return ( 
        <>
         <Main>
           <UserDelForm></UserDelForm>
           <UserSearch></UserSearch>

         </Main>
        </>
     );
}
 
export default UserDelete;