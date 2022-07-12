import Main from "./componentes/Main";
import "./Help.css"
const Help = () => {
    return ( 

        <div className="help">
            <article className="help__about">
                
                <h2>Sistema informático de gestión deportiva</h2>
                <p>Esta aplicación fue creada para poder llevar a cabo la gestión de los deportes realizados en la institución UTU. <br/>
                y así realizar estadísticas de los jugadores y equipos que pertenezcan a esta web
                </p>
            </article>
            
            <article className="help__about">
                
                <h2>¿Problemas para iniciar sesión?</h2>
                <p>En dicho caso deberá comunicarse con su director tércnico e informarle de esa situación para poder solucionarlo.
                </p>
            </article>
        </div>

     );
}
 
export default Help;