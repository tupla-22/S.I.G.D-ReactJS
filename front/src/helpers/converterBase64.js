

  export  const converterBase64 = (name,archivo,setState,form) =>{ 
        Array.from(archivo).forEach(archivo=>{
          let reader =new FileReader();
          reader.readAsDataURL(archivo);
          reader.onload = () =>{
            let con =reader.result
            let auxArr = con.split(',')
            setState({...form,[name]:auxArr[1]})
          }
        })

    }
