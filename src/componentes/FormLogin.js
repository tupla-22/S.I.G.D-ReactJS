import { Button } from '@mui/material';
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system';
import {useNavigate } from 'react-router-dom';
import Link from './Link';
import "./styles/FormLogin.css"

const FormLogin = () => {
  
  const navigate = useNavigate();


  const handleSubmit = (e) =>{
    navigate(`/student/${Math.round(Math.random()*1000)}`);
  }


    return ( 
        <div className="formLogin">
        <TextField
          className="formLogin__input"
          id=""
          label="Cedula"
          variant='outlined'
        />
        <TextField
          className="formLogin__input"
          id=""
          label="Contraseña"
          variant='outlined'
          type="password"
        />
        <Box><Link to="help">¿Problemas para iniciar sesión?</Link></Box>
        <Button onClick={handleSubmit} variant='text'>Entrar</Button>
        </div>
     );
}
 
export default FormLogin;