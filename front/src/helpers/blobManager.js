
const blobToBase64 = (name,archivo,setForm,form) =>{ 
    Array.from(archivo).forEach(archivo=>{
      let reader =new FileReader();
      reader.readAsDataURL(archivo);
      
      reader.onload = () =>{
        let con =reader.result
        let auxArr = con.split(',')
        setForm({...form,[name]:reader.result})
      }
    })

}

 
 
 const base64ToBlob = async (b64, type) =>{
    const blob = await fetch(`data:${type};base64,${b64}`);
    return blob;
 }


 export {
  blobToBase64,
  base64ToBlob
 }