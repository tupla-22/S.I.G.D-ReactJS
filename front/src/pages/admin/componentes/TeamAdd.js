import Main from "../../../componentes/styledComponents/Main";
import TeamAddForm from "./TeamAddForm";
import TeamAddUser from "./TeamAddUser";
import UserSearch from "./UserSearch";

const TeamAdd = () => {

  return (
    <Main>
        <TeamAddForm/>
        
        <TeamAddUser/>
        
        <UserSearch/>
    </Main>
  );
};

export default TeamAdd;
