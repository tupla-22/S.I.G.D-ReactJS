import { Button } from '@mui/material';
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system';
import {useNavigate } from 'react-router-dom';
import Link from './Link';
import "./styles/FormLogin.css"
import { useContext, useState } from 'react';
import RecoverPassword from './RecoverPassword';
import { helpHttp } from '../helpers/helpHttp';
import { PAlert } from './PAlert';
import UserContext, { UserProvider } from '../contexts/UserContext';
import Form from './Form';
import LanguajeContext from '../contexts/LanguajeContext';

const FormLogin = () => {
  const [errors, setErrors] = useState({errors:false,correct:false});
  const [usuario, setUsuario] = useState({password_usuario:null,ci_usuario:null});
  const navigate = useNavigate();
 
  const {text} = useContext(LanguajeContext)
  const {user,setUser} = useContext(UserContext);

  const regexUsuario =/^([0-9]){1,12}$/;



  const handleSubmit = (e) =>{
    e.preventDefault()

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
          let resultUser = e.result[0];

          setErrors({...errors,correct:false});
          localStorage.setItem("user",JSON.stringify(resultUser));
          setUser(resultUser);
          switch(Number.parseInt(resultUser.id_rol_usuario)){
            case 1:  navigate(`/admin/${resultUser.id_usuario}/home`);
            break;
            case 2:  navigate(`/administrative/${resultUser.id_usuario}/home`);
            break;
            case 3:  navigate(`/student/${resultUser.id_usuario}/home`);
            break;
            case 4:  navigate(`/scout/${resultUser.id_usuario}/home`);
            break;
            case 5:  navigate(`/judge/${resultUser.id_usuario}/home`);
            break;
            case 6:  navigate(`/dt/${resultUser.id_usuario}/home`);
            break;
            case 7:  navigate(`/analist/${resultUser.id_usuario}/home`);
            break;

          }
          
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
  } 

    return ( 
      <Form>
        {errors.correct && <PAlert>Cédula o contraseña incorrecta</PAlert>}
        <TextField
          name='ci_usuario'
          className="Form__input"
          label={ text.cedula}
          variant='outlined'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.usuario &&  <PAlert>{errors.usuario}</PAlert>}
        <TextField
        
          onChange={handleChange}
          name='password_usuario'
          className="Form__input"
          label={text.contraseña}
          variant='outlined'
          type="password"
        />
        <Box><RecoverPassword>{ text.problemasParaIniciarSesion }</RecoverPassword></Box>
        <Button type='submit' onClick={handleSubmit} className="Form__input" variant='contained'>{ text.entrar }</Button>



      </Form>
     );
}
 
export default FormLogin;