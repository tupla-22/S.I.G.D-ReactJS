import Main from "../../../componentes/Main";
import UserAddForm from "./UserAddForm";

const UserAdd = () => {
  return (
    <Main>
      <div className="userAdd">
        <h3>Agregar un usuario</h3>
        <UserAddForm/>
      </div>
    </Main>
  );
};

export default UserAdd;
