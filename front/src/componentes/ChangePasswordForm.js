import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import {ButtonClassic} from "./ButtonClassic";
import FormCien from "./FormCien";
import "./styles/ChangePasswordForm.css";
const FormPasswordChange = () => {
  const {user} = useContext(UserContext);

  const handleSubmit = () =>{
    console.log(user)
  }

  const handleChange = ()=>{

  }


  return (
    <FormCien>
      
    <h3>Cambiar contraseña</h3>
      <TextField
        type="password"
        className="FormCien__input"
        label="Nueva contraseña"
        name="contraseña"
      ></TextField>
      <TextField
        type="password"
        label="Repita nueva contraseña"
        className="FormCien__input"
        
      ></TextField>
      <ButtonClassic onClick={handleSubmit}>Cambiar</ButtonClassic>
    </FormCien>
  );
};

export default FormPasswordChange;
