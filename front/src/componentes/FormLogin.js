import { Button } from '@mui/material';
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system';
import {useNavigate } from 'react-router-dom';
import Link from './Link';
import "./styles/FormLogin.css"
import { useState } from 'react';
import RecoverPassword from './RecoverPassword';
import { helpHttp } from '../helpers/helpHttp';
import { PAlert } from './PAlert';

const FormLogin = () => {
  const [errors, setErrors] = useState({errors:false,correct:false});
  const [usuario, setUsuario] = useState({password_usuario:null,ci_usuario:null});
  const navigate = useNavigate();

  const regexUsuario =/^([0-9]){1,12}$/;



  const handleSubmit = (e) =>{
    const data = new URLSearchParams(usuario);

    const options ={
      method:"POST",
      headers:{"Content-type": "application/x-www-form-urlencoded;charset-UTF-8"},
      body:data
    }
    if(!errors.errors){

      const getUser = async ()=>{
        const resp = await fetch("http://apirest.com/usuarios?login=true&suffix=usuario",options).then(e=>e.json()).then(e=>{
        if(e.status==200){
          setErrors({...errors,correct:false});
          navigate(`/admin/${e.result[0].ci_usuario}/homeAdmin`);

          
        }else setErrors({...errors,correct:true});

        })
      }
      getUser();

      
    }
  }


  const handleBlur = (e) =>{
    if(!regexUsuario.test(usuario.ci_usuario.trim())){
      setErrors({...errors,
        usuario:"El campo cédula solo acepta números y hasta 8 caracteres",
        vacio:true
      });
    }else{setErrors({...errors,
      usuario:"",
      vacio:false
    });}
  }
  const handleChange = (e) =>{ 
    setUsuario({...usuario,[e.target.name]:e.target.value});
    console.log(usuario)
  } 

    return ( 
        <div className="formLogin">
          {errors.correct && <PAlert>Cédula o contraseña incorrecta</PAlert>}
        <TextField
          name='ci_usuario'
          className="formLogin__input"
          label="Cédula"
          variant='outlined'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.usuario &&  <PAlert>{errors.usuario}</PAlert>}
        <TextField
        
          onChange={handleChange}
          name='password_usuario'
          className="formLogin__input"
          label="Contraseña"
          variant='outlined'
          type="password"
        />
        <Box><RecoverPassword>¿Problemas para iniciar sesión?</RecoverPassword></Box>
        <Button onClick={handleSubmit} variant='contained'>Entrar</Button>
        </div>
     );
}
 
export default FormLogin;