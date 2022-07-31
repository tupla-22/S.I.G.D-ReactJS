import { Button, TextField } from "@mui/material";
import ButtonClassic from "./ButtonClassic";
import "./styles/ChangePasswordForm.css"
const FormPasswordChange = () => {
  const sxTextField = {margin:"20px"}
    return ( 
        <form className="FormPasswordChange">
          <TextField type="password" sx={sxTextField} label="Contraseña actual"></TextField>
          <TextField type="password" sx={sxTextField} label="Nueva contraseña"></TextField>
          <TextField type="password" sx={sxTextField} label="Repita nueva contraseña"></TextField>
          <ButtonClassic>Cambiar</ButtonClassic>
        </form>
     );
}
 
export default FormPasswordChange;