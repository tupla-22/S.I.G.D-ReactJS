const peticion = async (url) =>{
     return (await fetch(url).then(e=>e.json()).then(e=>e).catch(e=>console.error(e)))
}