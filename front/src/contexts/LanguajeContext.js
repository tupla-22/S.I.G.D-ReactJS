import { createContext } from "react"
import React, { useState, useEffect } from "react"

const LanguajeContext = createContext()

const initialLanguaje = "es"

const translation = {
    es: {
        ir: "Ir",
        inicio: "Inicio",
        ayuda: "Ayuda",
        entrar: "Entrar",
        unirme: "Unirme",
        cedula: "Cédula",
        contraseña: "Contraseña",
        problemasParaIniciarSesion: "¿Problemas para iniciar sesión?",
        elCampoCedulaSoloAceptaNumerosYHasta8Caracteres: "El campo cédula solo acepta números y hasta 8 caracteres",
        sigd: "Sistema informático de gestión deportiva",
        cedulaError: "Cédula o contraseña incorrecta",
        usuarios: "Usuarios",
        equipos: "Equipos",
        campeonatos: "Campeonatos",
        partidos: "Partidos",
        BSIGD: 'Bienvenido al "Sistema informático de gestión deportiva".',
        BSIGD2: "En este programa, tú como administrador puedes hacer muchas cosas, como agregar, modificar y elminiar usuarios, equipos, deportes y mucho más.",
        agregarUnUsuario: "Agregar un usuario",
        nombre: "Nombre",
        apellido: "Apellido",
        segundoNombre: "Segundo nombre",
        segundoApellido: "Segundo apellido",
        correoElectronico: "Corréo electrónico",
        fechaDeNacimiento: "Fecha de nacimiento",
        repetirContraseña: "Repita contraseña",
        administrador: "Administrador",
        estudiante: "Estudiante",
        reclutador: "Reclutador",
        juez: "Juez",
        directorTecnico: "Director técnico",
        analista: "Analista",
        tipoDeUsuario: "Tipo de usuario",
        carnetDeSaludValido: "Carnet se salud válido",
        fotoDePerfil: "Foto de perfil",
        agregar: "Agregar",
        eliminarUsuario: "Elminiar usuario",
        eliminar: "Eliminar",
        actualizar: "Actualizar",
        actualizarUsuarios: "Actualizar usuarios",
        rol: "Rol",
        buscar: "Buscar",
        buscarUsuario: "Buscar usuario",
        noSeEncontro: "No se encontró",
        tuPerfil: "Tú perfil",
        salir: "Salir",
        cambiarContraseña: "Cambiar contraseña",
        LasContraseñasNoCoinciden: "Las contraseñas no coinciden",
        accionLogradaCorrectamente: "Acción lograda correctamente",
        nuevaContraseña: "Nueva contraseña",
        repitaNuevaContraseña: "Repita nueva contraseña",
        cambiar: "Cambiar",
        error: "Ocurrió un error",
        nombreDelEquipo: "Nombre del equipo",
        agregarEquipo: "Agregar equipo",
        deporte: "Deporte",
        escudoDelEquipo: "Escudo del equipo",
        confirmar: "Confirmar",
        cancelar: "Cancelar",
        estasSeguro: "¿Estas seguro de realizar esta acción?",
        actualizarEquipos: "Actualizar equipos",
        eliminarEquipo: "Eliminar equipo",
        escudo: "Escudo",
        buscarEquipo: "Buscar equipo",
        nombreDelEquipo: "Nombre del equipo",
        agregarCampeonato: "Agregar campeonato",
        accionLograda: "Acción lograda correctamente",
        nombreDelCampeonato: "Nombre del campeonato",
        liga: "Liga",
        fechaDeInicio: "Fecha de inicio",
        fechaDeCierre: "Fecha de cierre",
        eliminarEquipo: "Eliminar equipo",
        buscarCampeonatos: "Buscar campeonatos",
        actualizarCampeonato: "Actualizar campeonato",
        agregarPartido: "Agregar partido",
        equipoLocal: "Equipo local",
        equipoVisitante: "Equipo visitante",
        tipo: "Tipo",
        fecha: "Fecha",
        hora: "Hora",
        eliminarPartido: "Eliminar partido",
        actualizarPartido: "Actualizar partido",
        campeonatoAlQuePertenece: "Campeonato al que pertenece",
        visualizar: "Visualizar",
        cartaDeJugador: "Carta de jugador",
        numeroTelefonico: "Número telefónico",
        jugador: "Jugador",
        contacto: "Contacto",
        estadisticas: "Estadisticas",
        tipoDeEstadistica: "Tipo de estadística",
        cantidad:"Cantidad",
        buscarJugador: "Buscar jugador",
        cambiarCorreo: "Cambiar correo",
        localesEnElJuego: "Locales en el juego",
        visitantesEnElJuego: "Visitantes en el juego",
        caracteristicasDelJugador: "Caracteristicas del jugador",
        jugadores: "Jugadores",
        altura: "Altura",
        peso: "Peso",
        minutosJugados: "Minutos jugados",
        lateralidad: "Lateralidad",
        nombreYApellido: "Nombre y apellido",
        datosDeContacto:"Datos de contacto"
        
    },
    en: {
        datosDeContacto:"Contact information",
        nombreYApellido: "Name and surname",
        lateralidad: "Laterality",
        minutosJugados:"Played minutes",
        peso: "Weight",
        altura:"Height",
        jugadores:"Players",
        caracteristicasDelJugador: "Player features",
        localesEnElJuego: "Locals in the game",
        visitantesEnElJuego: "Visitors in the game",
        cambiarCorreo: "Change email",
        buscarJugador:"Find player",
        cantidad:"amount",
        tipoDeEstadistica:"Stat type",
        estadisticas: "Stats",
        contacto:"Contact",
        jugador:"Player",
        numeroTelefonico:"Telephone number",
        cartaDeJugador:"playerCard",
        visualizar:"Watch",
        campeonatoAlQuePertenece: "Championship to which it belongs",
        actualizarPartido:"Update match",
        eliminarPartido:"Delete match",
        fecha: "Date",
        hora:"Time",
        tipo:"Type",
        equipoLocal: "Local team",
        equipoVisitante: "Visiting team",
        agregarPartido:"Add match",
        actualizarCampeonato:"Update championship",
        buscarCampeonatos:"Search championships",
        eliminarEquipo:"Del team",
        fechaDeCierre: "Deadline",
        fechaDeInicio:"Start date",
        liga:"League",
        nombreDelCampeonato: "Championship name",
        accionLograda:"Action succeesed",
        agregarCampeonato:"Add championship",
        nombreDelEquipo:"Team name",
        buscarEquipo: "Search team",
        escudo:"Shield",
        eliminarEquipo:"Delete team",
        actualizarEquipos:"Update teams",
        estasSeguro: "Are you sure?",
        cancelar:"Abort",
        confirmar:"Confirm",
        escudoDelEquipo:"Team's shield",
        deporte:"Sport",
        agregarEquipo: "Add team",
        nombreDelEquipo:"Team name",
        error:"An error occurred",
        cambiar:"Change",
        repitaNuevaContraseña:"Repeat new password",
        nuevaContraseña:"New password",
        accionLogradaCorrectamente:"Action succeeded",
        LasContraseñasNoCoinciden:"The passwords do not match",
        cambiarContraseña:"Change password",
        salir:"Go out",
        tuPerfil:"Your profile",
        noSeEncontro:"It do not find",
        buscarUsuario:"Search user",
        buscar:"Search",
        rol: "Role",
        actualizarUsuarios:"Update users",
        actualizar:"Update",
        eliminar:"Delete",
        eliminarUsuario:"Delete user",
        ir:"Go",
        inicio: "Home",
        ayuda: "Help",
        entrar: "Login",
        unirme: "Go",
        cedula: "Identity card",
        contraseña: "Password",
        problemasParaIniciarSesion: "problems logging in?",
        elCampoCedulaSoloAceptaNumerosYHasta8Caracteres: "The ID field only accepts numbers and up to 8 characters",
        sigd: "Sports management computer system",
        cedulaError: "Wrong ID or password",
        usuarios: "Users",
        equipos: "Teams",
        campeonatos: "championships",
        partidos: "Matches",
        BSIGD:'Welcome to the "Sports Management Information System"',
        BSIGD2: "In this program, you as an administrator can do many things, such as add, modify and delete users, teams, sports and much more.",
        agregarUnUsuario: "Add a user",
        nombre: "Name",
        apellido: "Surname",
        segundoNombre: "Second name",
        segundoApellido: "Second surname",
        correoElectronico: "Email",
        fechaDeNacimiento: "Date of birth",
        repetirContraseña: "Repeat password",
        administrador: "Administrator",
        estudiante: "Student",
        reclutador: "Recruiter",
        juez: "Judge",
        directorTecnico: "Technical director",
        analista: "Analist",
        tipoDeUsuario: "User type",
        carnetDeSaludValido: "NHS card",
        fotoDePerfil: "Profile picture",
        agregar:"Add"
        
        
    }
}

const LanguajeProvider = ({ children }) => {
    const [languaje, setLanguaje] = useState(initialLanguaje)
    const [text, setText] = useState(translation.es)
	
    useEffect(() => {
        if (localStorage.getItem("languaje") == "es") {
            
            setLanguaje("es")
            setText(translation.es)
        } if (localStorage.getItem("languaje") == "en") {
            setLanguaje("en")
            setText(translation.en)
        } 
    }, []);
    

    const handleLanguaje = (e) => {
        if (e==="es") {
            setLanguaje("es")
            setText(translation.es)
        }else if (e==="en"){
            setLanguaje("en")
            setText(translation.en)
        }
    }

    const data = { setLanguaje,text, handleLanguaje }
    
	return <LanguajeContext.Provider value={data}>{children}</LanguajeContext.Provider>
}

export { LanguajeProvider }

export default LanguajeContext
