import { Button } from '@mui/material';
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./styles/FormLogin.css"

const FormLogin = () => {
  
  const navigate = useNavigate();


  const handleSubmit = (e) =>{
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
        <Box><Link to="ayuda">¿Problemas para iniciar sesión?</Link></Box>
        <Button onClick={handleSubmit} variant='text'>Entrar</Button>
        </div>
     );
}
 
export default FormLogin;