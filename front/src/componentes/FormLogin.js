import { Button } from '@mui/material';
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system';
import {useNavigate } from 'react-router-dom';
import Link from './Link';
import "./styles/FormLogin.css"
import { useState } from 'react';

const FormLogin = () => {
  const [errors, setErrors] = useState({});
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();

  const regexUsuario =/^([0-9]){0,12}$/;

  const handleSubmit = (e) =>{
    navigate(`/student/${Math.round(Math.random()*1000)}`);
  }


  const handleBlur = (e) =>{
    if(!regexUsuario.test(usuario.trim())){
      setErrors({...errors,
        usuario:"El campo cédula solo acepta números y hasta 12 caracteres"
      });
    }else{setErrors({...errors,
      usuario:""
    });}
  }
  const handleChange = (e) =>{ 
    setUsuario(e.target.value);
  } 

    return ( 
        <div className="formLogin">
        <TextField
          className="formLogin__input"
          label="Cédula"
          variant='outlined'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.usuario && <div style={{color:"red"}}>{errors.usuario}</div>}
        <TextField
          className="formLogin__input"
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