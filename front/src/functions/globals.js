import { getToken } from "./User"

export const urlApi = (url) =>{
    
   return `http://apirest.com/${url}&token=${getToken()}`
}


export const dateTradeEs = (fecha) =>{
   let arrFecha = fecha.split("-")
   let date = `${arrFecha[2]}/${arrFecha[1]}/${arrFecha[0]}`
   return date;
}

