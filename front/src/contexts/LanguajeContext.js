import { createContext } from "react"
import React, { useState, useEffect } from "react"

const LanguajeContext = createContext()

const initialLanguaje = "es"

const translation = {
    es: {
        inicio: "Inicio",
        ayuda: "Ayuda",
        entrar: "Entrar",
        unirme: "Unirme",
        cedula: "Cédula",
        contraseña: "Contraseña",
        problemasParaIniciarSesion: "¿Problemas para iniciar sesión?",
        entrar: "Entrar",
        elCampoCedulaSoloAceptaNumerosYHasta8Caracteres:"El campo cédula solo acepta números y hasta 8 caracteres"
        
    },
    en: {
        
        inicio: "Home",
        ayuda: "Help",
        entrar: "Login",
        unirme: "Go",
        cedula: "Identity card",
        contraseña: "Password",
        problemasParaIniciarSesion: "problems logging in?",
        entrar: "Enter",
        elCampoCedulaSoloAceptaNumerosYHasta8Caracteres:"The ID field only accepts numbers and up to 8 characters"
    },
}

const LanguajeProvider = ({ children }) => {
    const [languaje, setLanguaje] = useState(initialLanguaje)
    const [text, setText] = useState(translation.en)
	

    const handleLanguaje = (e) => {
        if (e==="es") {
            setLanguaje("es")
            setText(translation.es)
        } else {
            setLanguaje("en")
            setText(translation.en)
        }
    }

    const data = { setLanguaje,text, handleLanguaje }
    
	return <LanguajeContext.Provider value={data}>{children}</LanguajeContext.Provider>
}

export { LanguajeProvider }

export default LanguajeContext