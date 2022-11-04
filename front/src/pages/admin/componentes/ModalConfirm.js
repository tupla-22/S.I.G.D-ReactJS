import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonClassic } from '../../../componentes/ButtonClassic';
import LanguajeContext from '../../../contexts/LanguajeContext';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius:"15px",
  transform: 'translate(-50%, -50%)',
  width:320,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ModalConfirm({color,name,setConfirm}) {
  const [open, setOpen] = React.useState("");
  const handleOpen = (e) => {
    e.preventDefault()
    setOpen(true)
  };
  const handleClose = (e) => { 
    e.preventDefault()
    setOpen(false)
    setConfirm(e.target.name)
  };

  const { text } = React.useContext(LanguajeContext)
  


  return (
    <div>
      <Button type="submit" onClick={handleOpen}>{name}</Button>
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
              {text.estasSeguro}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Button name={"1"} onClick={handleClose}><CheckCircleTwoToneIcon/> {text.confirmar}</Button>
            <Button color='error' name={"0"} onClick={handleClose}>{<HighlightOffTwoToneIcon/>}  {text.cancelar}</Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}