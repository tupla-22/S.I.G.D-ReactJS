import Main from "../../../componentes/styledComponents/Main";
import AddPlayerToTeam from "./AddPlayerToTeam";
import TeamAddForm from "./TeamAddForm";
import TeamAddUser from "./TeamAddUser";
import UserSearch from "./UserSearch";

const TeamAdd = () => {

  return (
    <Main>
      <TeamAddForm />
      <AddPlayerToTeam/>
    </Main>
  );
};

export default TeamAdd;
