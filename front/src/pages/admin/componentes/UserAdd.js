import Main from "../../../componentes/Main";
import UserAddForm from "./UserAddForm";

const UserAdd = () => {
  const sx = {
    display:"flex",
    justifyContent:"center"
  };

  return (
    <div style={sx}>
      <UserAddForm />
    </div>
  );
};

export default UserAdd;
