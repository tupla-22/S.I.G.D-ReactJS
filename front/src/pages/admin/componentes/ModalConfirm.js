import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonClassic } from '../../../componentes/ButtonClassic';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius:"15px",
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalConfirm({confirm,setConfirm}) {
  const [open, setOpen] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = (e) =>{ 
    setOpen(false)
    setConfirm(e.target.name)
    console.log(confirm)
  };

  return (
    <div>
      <ButtonClassic onClick={handleOpen}>Eliminar</ButtonClassic>
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
              ¿Estas seguro de realizar esta acción?
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <Button name={"1"} onClick={handleClose}>Confirmar</Button>
            <Button name={"0"} onClick={handleClose}>Cancelar</Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}