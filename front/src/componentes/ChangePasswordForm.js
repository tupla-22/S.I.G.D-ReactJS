import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "./ButtonClassic";
import FormCien from "./FormCien";
import "./styles/ChangePasswordForm.css";
const FormPasswordChange = () => {
  return (
    <FormCien>
      
    <h3>Cambiar contraseña</h3>
      <TextField
        type="password"
        className="FormCien__input"

        label="Contraseña actual"
      ></TextField>
      <TextField
        type="password"
        className="FormCien__input"
        label="Nueva contraseña"
      ></TextField>
      <TextField
        type="password"
        label="Repita nueva contraseña"
        className="FormCien__input"

      ></TextField>
      <ButtonClassic>Cambiar</ButtonClassic>
    </FormCien>
  );
};

export default FormPasswordChange;
