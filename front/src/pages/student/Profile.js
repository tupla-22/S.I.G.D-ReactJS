import "./styles/Profile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { padding } from "@mui/system";
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

  return (
    <div className="profile">
      <div className="section">
        <div className="profile__avatar">
          <Button sx={stAvatar}>
            <AccountCircleIcon sx={stIcon} />
          </Button>
        </div>

        <div>
          <Button sx={stButton} variant="contained">
            Cambiar contraseña
          </Button>
        </div>
        <div>
          <Button sx={stButton} variant="contained">
            Configuración
          </Button>
        </div>
        <div>
          <Button sx={stButton} variant="contained">
            Configuración
          </Button>
        </div>
      </div>
      <div className="section "></div>
    </div>
  );
};

export default Profile;
