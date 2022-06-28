import { Button } from '@mui/material';
import TextField from '@mui/material/TextField'
import "./styles/FormLogin.css"

const FormLogin = () => {
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
        <Button variant='text'>Entrar</Button>
        </div>
     );
}
 
export default FormLogin;