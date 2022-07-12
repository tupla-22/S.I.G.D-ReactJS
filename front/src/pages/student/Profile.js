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

  return (
    <div className="profile">
      <div className="section">
        <div className="profile__avatar">
          <Button sx={stAvatar}>
            <AccountCircleIcon
              sx={{ height: "100%", width: "100%", color: "#0005" }}
            />
          </Button>
        </div>
      </div>
      <div className="section ">1</div>
      <div className="section ">
        <div>
          <Button
            sx={{
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: [0.9, 0.8, 0.7],
              },
              margin: "10px",
            }}
            variant="contained"
          >
            Configuración
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
      <div className="section ">3</div>
    </div>
  );
};

export default Profile;
