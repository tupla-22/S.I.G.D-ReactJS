import Main from "../../../componentes/styledComponents/Main";
import UserList from "./UserList";
import UserSearch from "./UserSearch";
import UserUpdateForm from "./UserUpdateForm";
import React, { useState, useEffect } from 'react';
import UserUpdateCard from "./UserUpdateCard";
import AlertSuccees from "../../../componentes/AlertSuccees";

const UserUpdate = () => {
  const [user, setUser] = useState(null);
  const [ok, setOk] = useState(false);
  return (
    <>
      {ok && <AlertSuccees/>}
      <Main>
        {user && <UserUpdateCard setOk={setOk} setUser={setUser} data={user}/>}
        <UserUpdateForm user={user} setUser={setUser} />
        <UserSearch/>
      </Main>
    </>
  );
};

export default UserUpdate;
