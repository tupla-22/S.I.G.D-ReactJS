import { Button } from '@mui/material';
import TextField from '@mui/material/TextField'
import { Navigate, useNavigate } from 'react-router-dom';
import "./styles/FormLogin.css"

const FormLogin = () => {
  
  const navigate = useNavigate();


  const handleClick = (e) =>{
    navigate("/StudentHome");
  }


    return ( 
        <div className="formLogin">
        <TextField
          id=""
          label="Cedula"
          variant='outlined'
        />
        <TextField
          id=""
          label="Contraseña"
          variant='outlined'
          type="password"
        />
        <Button onClick={handleClick} variant='text'>Entrar</Button>
        </div>
     );
}
 
export default FormLogin;