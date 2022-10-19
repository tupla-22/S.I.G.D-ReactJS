const convertirBase64 = (archivo,setState) =>{ 
    Array.from(archivo).forEach(archivo=>{
      let reader =new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = () =>{
        let con =reader.result
        let auxArr = con.split(',')
        setState({...teamForm,escundo:auxArr[1]})
      }
    })
  }