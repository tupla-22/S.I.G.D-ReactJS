import { getToken } from "./User"

export const urlApi = (url) =>{
    
   return `http://apirest.com/${url}&token=${getToken()}`
}



