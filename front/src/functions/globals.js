import { getToken } from "./User"

export const urlApi = (url) =>{
    
<<<<<<< HEAD
   return `http://apirest.com/${url}&token=${getToken()}`
=======
   return `http://192.168.2.111/S.I.G.D-ReactJS/back/${url}&token=${getToken()}`
>>>>>>> 3dcb9f8246e8334b024cd9b2b3d854de4a59b615
}


export const urlApiSinToken = (url) =>{
    
<<<<<<< HEAD
   return `http://apirest.com/${url}`
=======
   return `http://192.168.2.111/S.I.G.D-ReactJS/back/${url}`
>>>>>>> 3dcb9f8246e8334b024cd9b2b3d854de4a59b615
}




export const dateTradeEs = (fecha) =>{
   try{
      let arrFecha = fecha.split("-")
      let date = `${arrFecha[2]}/${arrFecha[1]}/${arrFecha[0]}`
      return date;
   }catch (e){
      return console.error(e)
   }
}

export const passwordVerifier = (password1,password2) =>{
   if(password1==password2){
      return true;
   }else return false;

}

export const userVerifier =(setForm,form)=>{
   
  const user = JSON.parse(localStorage.getItem("user"));

    if(user.id_rol_usuario == "1" || user.id_rol_usuario == "2"){
      setForm({...form,admin:true})
    }
}

export const getDateTime = ()=>{
   let e = new Date()
   return `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()} ${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}`
}
export const getDateNow = ()=>{
   let e = new Date()
   return `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`
}

export const getProp =(e) =>{
  return e.target.__reactProps$c4sn3kvq0ie

}


export const getUser=()=>{
   return JSON.parse(localStorage.getItem("user"))
}


export const calcularEdad = (fecha) => {
   var hoy = new Date();
   var cumpleanos = new Date(fecha);
   var edad = hoy.getFullYear() - cumpleanos.getFullYear();
   var m = hoy.getMonth() - cumpleanos.getMonth();

   if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
       edad--;
   }

   return edad;

}



export const localGetItem = (name) => {
   return JSON.parse(localStorage.getItem(name)) 
}