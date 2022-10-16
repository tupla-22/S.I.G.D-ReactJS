import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonClassic } from "../../../componentes/ButtonClassic";
import UserList from "../../admin/componentes/UserList";
import UserListButtons from "./UserListButtons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "15px",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UsersModal({
  confirm,
  setConfirm,
  locales,
  visitantes,
  children,
  name,
  onClick,
}) {
  const [open, setOpen] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    setOpen(false);
    setConfirm(e.target.name);
    console.log(confirm);
  };
  console.log(locales, visitantes);
  return (
    <div>
      <ButtonClassic onClick={handleOpen}>{children}</ButtonClassic>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Usuario al que se le otorga
            </Typography>
            <UserListButtons name={name} onClick={onClick} visitantes={visitantes} locales={locales} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
