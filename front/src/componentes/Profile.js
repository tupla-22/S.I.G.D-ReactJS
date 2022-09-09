import "./styles/Profile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
const Profile = () => {
  const stAvatar = {
    borderRadius: "100%",
  };
  const stButton = {
    backgroundColor: "secondary.main",
    "&:hover": {
      backgroundColor: "secondary.main",
      opacity: [0.9, 0.8, 0.7],
    },
    margin: "10px",
  };
  const stIcon = { height: "100%", width: "100%", color: "#0005" };

  const navigate= useNavigate();

  const handlePassword = () =>{
    navigate("changePassword");
  }

  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)


  return (
    <div className="profile">
      <div className="section">
        <div className="profile__avatar">
          <Button sx={stAvatar}>
            <AccountCircleIcon sx={stIcon} />
          </Button>
        </div>
        <h3>{user.primerNombre_usuario}</h3>
        <div>
          <Button  onClick={handlePassword} sx={stButton} variant="contained">
            Cambiar contraseña
          </Button>
        </div>
      </div>
      <div className="section ">
        <Outlet/>
      </div>
    </div>
  );
};

export default Profile;
