import { createContext } from "react";
import React, { useState } from 'react';



const UserContext = createContext();




const UserProvider = ({children}) => {
    const [user, setUser] = useState({});

    const data = {user,setUser}

    return ( 

        <UserContext.Provider value={data}>{children}</UserContext.Provider>
     );
}
 
export {UserProvider};


export default UserContext;