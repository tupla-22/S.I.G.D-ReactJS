import { getToken } from "./User"

export const urlApi = (url) =>{
    
   return `http://apirest.com/${url}&token=${getToken()}`
}


export const dateTradeEs = (fecha) =>{
   let arrFecha = fecha.split("-")
   let date = `${arrFecha[2]}/${arrFecha[1]}/${arrFecha[0]}`
   return date;
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

