import Main from "../../../componentes/styledComponents/Main";
import UserList from "./UserList";
import UserSearch from "./UserSearch";
import UserUpdateForm from "./UserUpdateForm";
import React, { useState, useEffect } from 'react';
import UserUpdateCard from "./UserUpdateCard";

const UserUpdate = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <Main>
        {user && <UserUpdateCard data={user}/>}
        <UserUpdateForm user={user} setUser={setUser} />
        <UserSearch/>
      </Main>
    </>
  );
};

export default UserUpdate;
